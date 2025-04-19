from unittest.mock import AsyncMock, MagicMock, patch

import pytest
from surfgram_cli.enums import LevelsEnum

from surfgram import APIObject
from surfgram.bot import Bot
from surfgram.listeners import BaseListener
from surfgram.types import TypesFactory


class TestBaseListener:

    @pytest.mark.asyncio
    async def test_initialization(self):
        """Tests the initialization of BaseListener."""
        listener = BaseListener(offset=10, timeout=20)
        assert listener.offset == 10
        assert listener.timeout == 20

    @pytest.mark.asyncio
    @patch("surfgram.core.listeners.TypesFactory.get_instance")
    @patch("surfgram.core.listeners.BaseListener._get_updates")
    @patch("surfgram_cli.debugger.log")
    async def test_listen_method(self, mock_log, mock_get_updates, mock_get_instance):
        """Tests the listen method of BaseListener."""
        mock_bot = MagicMock(spec=Bot)
        mock_update_data = {"update_id": 1, "message": "test"}
        mock_get_updates.return_value = [mock_update_data]

        # Mock the behavior of TypesFactory and its methods
        mock_executable_instance = AsyncMock()
        mock_executable_instance.__callback__ = AsyncMock()
        mock_get_instance.return_value = mock_executable_instance

        listener = BaseListener()
        await listener.listen(mock_bot)

        # After listen, verify the update processing
        assert mock_get_updates.call_count == 1
        assert mock_get_instance.call_count == 1
        assert mock_executable_instance.__callback__.call_count == 1

        # Check the offset has been updated
        assert listener.offset == 2  # Should be update_id + 1

    @pytest.mark.asyncio
    @patch("surfgram.core.listeners.TypesFactory.get_instance")
    @patch("surfgram_cli.debugger.log")
    async def test_on_update_method(self, mock_log, mock_get_instance):
        """Tests the on_update method of BaseListener."""
        mock_bot = MagicMock(spec=Bot)
        update_data = {"update_id": 1, "message": "test"}
        api_object = APIObject(update_data)

        # Mock the behavior of TypesFactory
        mock_executable_instance = AsyncMock()
        mock_executable_instance.__callback__ = AsyncMock()
        mock_get_instance.return_value = mock_executable_instance

        listener = BaseListener()
        await listener.on_update(api_object, mock_bot)

        # Verify logging and callback execution
        mock_log.assert_called_once_with(
            f"Update received: {api_object}", LevelsEnum.API
        )
        assert mock_executable_instance.__callback__.call_count == 1

    @pytest.mark.asyncio
    @patch("surfgram.core.listeners.BaseListener._get_updates")
    async def test_get_updates_method(self, mock_get_updates):
        """Tests the _get_updates method of BaseListener."""
        mock_bot = MagicMock(spec=Bot)
        listener = BaseListener()

        # Mock the response from the bot
        mock_get_updates.return_value = {"result": [{"update_id": 1}]}

        updates = await listener._get_updates(mock_bot)
        assert len(updates) == 1
        assert updates[0]["update_id"] == 1
