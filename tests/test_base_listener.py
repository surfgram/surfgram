import pytest
from surfgram.core.structures import APIObject
from surfgram.core.bot import Bot
from surfgram.types import TypesFactory
from surfgram_cli import debugger
from surfgram_cli.enums import LevelsEnum
from surfgram.core.listeners import BaseListener


class TestBaseListener:
    @pytest.fixture
    def mock_bot(self, mocker):
        bot = mocker.MagicMock(spec=Bot)
        bot.get_updates = mocker.AsyncMock()
        bot.webhook = None
        return bot

    @pytest.fixture
    def base_listener(self):
        return BaseListener(offset=10, timeout=20)

    @pytest.mark.asyncio
    async def test_listen(self, mock_bot, base_listener, mocker):
        updates = [{"update_id": 1, "data": "test1"}, {"update_id": 2, "data": "test2"}]
        mock_bot.get_updates.return_value = {"result": updates}

        mocker.patch("surfgram_cli.debugger.log")

        processed_updates = []

        async def mock_on_update(update, bot):
            processed_updates.append(update)
            if len(processed_updates) >= len(updates):
                raise Exception("break loop")

        original_on_update = base_listener.on_update
        base_listener.on_update = mock_on_update

        with pytest.raises(Exception, match="break loop"):
            await base_listener.listen(mock_bot)

        assert len(processed_updates) == len(updates)
        mock_bot.get_updates.assert_called_once_with(timeout=20, offset=10)

        base_listener.on_update = original_on_update

    @pytest.mark.asyncio
    async def test_initialization(self):
        listener = BaseListener(offset=5, timeout=15)
        assert listener.offset == 5
        assert listener.timeout == 15

    @pytest.mark.asyncio
    async def test_on_update_with_valid_executable(
        self, mock_bot, base_listener, mocker
    ):
        mock_update = mocker.MagicMock(spec=APIObject)
        mock_executable_class = mocker.MagicMock()
        mock_executable_instance = mocker.MagicMock()
        mock_executable_instance.__callback__ = mocker.AsyncMock()

        mock_executable_class.create = mocker.AsyncMock(
            return_value=mock_executable_instance
        )
        mocker.patch(
            "surfgram.types.TypesFactory.get_instance",
            return_value=mock_executable_class,
        )
        mocker.patch("surfgram_cli.debugger.log")

        await base_listener.on_update(mock_update, mock_bot)

        debugger.log.assert_called_with(
            f"Update received: {mock_update}", LevelsEnum.API
        )
        mock_executable_class.create.assert_awaited_with(mock_update)
        mock_executable_instance.__callback__.assert_awaited_with(mock_update, mock_bot)

    @pytest.mark.asyncio
    async def test_on_update_with_no_executable(self, mock_bot, base_listener, mocker):
        mock_update = mocker.MagicMock(spec=APIObject)
        mocker.patch("surfgram.types.TypesFactory.get_instance", return_value=None)
        mocker.patch("surfgram_cli.debugger.log")

        await base_listener.on_update(mock_update, mock_bot)

        debugger.log.assert_called_with(
            f"Update received: {mock_update}", LevelsEnum.API
        )

    @pytest.mark.asyncio
    async def test_on_update_with_executable_but_no_instance(
        self, mock_bot, base_listener, mocker
    ):
        mock_update = mocker.MagicMock(spec=APIObject)
        mock_executable_class = mocker.MagicMock()
        mock_executable_class.create = mocker.AsyncMock(return_value=None)
        mocker.patch(
            "surfgram.types.TypesFactory.get_instance",
            return_value=mock_executable_class,
        )
        mocker.patch("surfgram_cli.debugger.log")

        await base_listener.on_update(mock_update, mock_bot)

        debugger.log.assert_called_with(
            f"Update received: {mock_update}", LevelsEnum.API
        )
        mock_executable_class.create.assert_awaited_with(mock_update)

    @pytest.mark.asyncio
    async def test_get_updates(self, mock_bot, base_listener):
        expected_updates = [{"update_id": 1}, {"update_id": 2}]
        mock_bot.get_updates.return_value = {"result": expected_updates}

        result = await base_listener._get_updates(mock_bot)

        assert result == expected_updates
        mock_bot.get_updates.assert_awaited_with(timeout=20, offset=10)

    @pytest.mark.asyncio
    async def test_get_updates_empty_result(self, mock_bot, base_listener):
        mock_bot.get_updates.return_value = {}

        result = await base_listener._get_updates(mock_bot)

        assert result == []
        mock_bot.get_updates.assert_awaited_with(timeout=20, offset=10)
