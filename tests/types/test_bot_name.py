import pytest
from surfgram.types.bot_name import BotName
from surfgram.types.bot_name.factory import BotNamesFactory


class TestBotName:
    """Tests for BotName base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotName()

    @pytest.fixture
    def concrete_bot_name(self):
        """Concrete BotName implementation for testing."""

        class ConcreteBotName(BotName):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotName

    def test_concrete_instantiation(self, concrete_bot_name):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_name()
        assert isinstance(instance, BotName)


class TestBotNamesFactory:
    """Tests for BotNamesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotNamesFactory.BOTNAMES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotName):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotNamesFactory.register_bot_name(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_name = mocker.MagicMock()
        mock_update.bot_name.name = "test_trigger"

        result = await BotNamesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_name = mocker.MagicMock()
        mock_update.bot_name.name = "unknown_trigger"

        assert await BotNamesFactory.create(mock_update) is None
