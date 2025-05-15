import pytest
from surfgram.core.bot import Bot
from surfgram.core.structures import APIObject
from surfgram_cli.enums import LevelsEnum
from surfgram.exceptions import TokenError
import asyncio
import json
import inspect


class TestBot:
    @pytest.fixture
    def mock_config(self, mocker):
        config = mocker.MagicMock()
        config.get_token.return_value = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
        # Return a mock class that will be instantiated
        listener_class = mocker.MagicMock()
        listener_instance = mocker.AsyncMock()
        listener_class.return_value = listener_instance
        config.get_listener.return_value = listener_class
        return config

    @pytest.fixture
    def mock_client(self, mocker):
        client = mocker.MagicMock()
        client.send_request = mocker.AsyncMock(return_value=json.dumps({"ok": True}))
        return client

    @pytest.fixture
    def mock_token(self, mocker):
        token = mocker.MagicMock()
        token.value = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
        return token

    @pytest.fixture
    def bot(self, mocker, mock_config, mock_client, mock_token):
        mocker.patch("surfgram.core.bot.NativeClient", return_value=mock_client)
        mocker.patch("surfgram.core.bot.debugger.log")
        mocker.patch("surfgram.core.bot.Token", return_value=mock_token)
        return Bot(mock_config)

    @pytest.mark.asyncio
    async def test_initialization(self, bot, mock_config):
        """Test bot initializes with correct token and listener"""
        assert bot.token.value == mock_config.get_token.return_value
        mock_config.get_token.assert_called_once()
        mock_config.get_listener.assert_called_once()

    @pytest.mark.asyncio
    async def test_make_request_success(self, bot):
        """Test successful API request"""
        test_response = {"ok": True, "result": "success"}
        bot.client.send_request.return_value = json.dumps(test_response)

        result = await bot._make_request("testMethod", {"param": "value"})
        assert result == test_response
        bot.client.send_request.assert_awaited_once()

    @pytest.mark.asyncio
    async def test_make_request_with_update(self, bot):
        """Test request with update triggers listener"""
        test_response = {"ok": True}
        test_update = {"update_id": 1}
        bot.client.send_request.return_value = json.dumps(test_response)

        result = await bot._make_request("testMethod", {"param": "value"}, test_update)
        assert result == test_response
        bot.listener.on_update.assert_awaited_once()
        assert isinstance(bot.listener.on_update.call_args[0][0], APIObject)

    @pytest.mark.asyncio
    async def test_make_request_failure(self, bot):
        """Test failed API request returns empty dict"""
        bot.client.send_request.side_effect = Exception("Test error")

        result = await bot._make_request("testMethod", {"param": "value"})
        assert result == {}
        bot.listener.on_update.assert_not_awaited()

    @pytest.mark.asyncio
    async def test_dynamic_method_calls(self, bot):
        """Test dynamic method calls via __getattr__"""
        test_response = {"ok": True}
        bot.client.send_request.return_value = json.dumps(test_response)

        result = await bot.testMethod(param="value")
        assert result == test_response
        bot.client.send_request.assert_awaited_once()

    @pytest.mark.asyncio
    async def test_listen(self, bot, mocker):
        """Test listen method sets up event loop correctly"""
        # Create a mock loop
        mock_loop = mocker.MagicMock()

        # Create a simple coroutine function
        async def mock_listen_coro(bot_instance):
            pass

        # Configure the mock loop
        mock_loop.run_until_complete.return_value = None

        # Patch the asyncio functions
        mocker.patch("asyncio.new_event_loop", return_value=mock_loop)
        mocker.patch("asyncio.set_event_loop")

        # Replace the listener's listen with our coroutine function
        bot.listener.listen = mock_listen_coro

        # Run the test
        bot.listen()

        # Verify the calls
        asyncio.new_event_loop.assert_called_once()
        asyncio.set_event_loop.assert_called_once_with(mock_loop)

        # Get the actual coroutine that was called
        called_coro = mock_loop.run_until_complete.call_args[0][0]

        # Verify it's our coroutine function being called with the bot instance
        assert inspect.iscoroutine(called_coro)
        assert called_coro.cr_code == mock_listen_coro.__code__
        assert called_coro.cr_frame.f_locals["bot_instance"] is bot

        mock_loop.close.assert_called_once()
