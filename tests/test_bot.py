from unittest.mock import AsyncMock, patch

import pytest
from surfgram_cli.enums import LevelsEnum
from surfgram_cli.utils import debugger

from surfgram import Bot
from surfgram.core.validator import Token
from surfgram.exceptions import BotError


class TestBot:

    @pytest.fixture
    def bot(self, mocker):
        """Fixture to create a Bot instance with mocked configuration."""
        # Mock the configuration object
        mock_config = mocker.Mock()
        mock_config.get_token.return_value = "dummy_token"
        mock_listener = mocker.Mock()
        mock_config.get_listener.return_value = mock_listener

        return Bot(mock_config)

    @pytest.mark.asyncio
    async def test_make_request_success(self, bot, mocker):
        """Tests successful API request handling."""
        mocker.patch("aiohttp.ClientSession.post", new_callable=AsyncMock)
        bot.session.post.return_value.__aenter__.return_value.status = 200
        bot.session.post.return_value.__aenter__.return_value.json = AsyncMock(
            return_value={"ok": True}
        )

        response = await bot._make_request(
            "sendMessage", {"chat_id": 123, "text": "Hello"}
        )

        assert response == {"ok": True}
        bot.session.post.assert_called_once()

    @pytest.mark.asyncio
    async def test_make_request_error(self, bot, mocker):
        """Tests error handling in case of a failed request."""
        mocker.patch("aiohttp.ClientSession.post", new_callable=AsyncMock)
        bot.session.post.return_value.__aenter__.return_value.status = 400

        with pytest.raises(BotError, match="API request failed: 400"):
            await bot._make_request("sendMessage", {"chat_id": 123, "text": "Hello"})

    @pytest.mark.asyncio
    async def test_dynamic_method_generation(self, bot):
        """Tests if dynamic method generation works correctly."""
        # Mock the request method for 'sendMessage'
        bot._make_request = AsyncMock(return_value={"ok": True})

        response = await bot.sendMessage(chat_id=123, text="Hello World")

        assert response == {"ok": True}
        bot._make_request.assert_called_once_with(
            "sendMessage", {"chat_id": 123, "text": "Hello World"}
        )

    @pytest.mark.asyncio
    async def test_close(self, bot):
        """Tests cleanup of resources."""
        await bot.close()
        assert bot.session.closed
        assert bot.connector._closed  # Check if connector is closed

    @pytest.mark.asyncio
    async def test_listen(self, mocker, bot):
        """Tests the listen method."""
        mock_listener = bot.listener
        mock_listener.listen = AsyncMock()

        bot.listen()  # Call the method to test

        await asyncio.sleep(0.1)  # Give some time for the async call

        mock_listener.listen.assert_called_once_with(bot)

    def test_initialization_fail_invalid_token(self):
        """Tests failing initialization with an invalid token."""
        mock_config = mocker.Mock()
        mock_config.get_token.return_value = "invalid_token"

        with pytest.raises(ValueError):
            Bot(mock_config)
