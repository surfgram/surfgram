import pytest
from surfgram.types.bot_description import BotDescription
from surfgram.types.bot_description.factory import BotDescriptionsFactory


class TestBotDescription:
    """Tests for BotDescription base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotDescription()

    @pytest.fixture
    def concrete_bot_description(self):
        """Concrete BotDescription implementation for testing."""

        class ConcreteBotDescription(BotDescription):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotDescription

    def test_concrete_instantiation(self, concrete_bot_description):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_description()
        assert isinstance(instance, BotDescription)


class TestBotDescriptionsFactory:
    """Tests for BotDescriptionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotDescriptionsFactory.BOTDESCRIPTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotDescription):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotDescriptionsFactory.register_bot_description(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_description = mocker.MagicMock()
        mock_update.bot_description.description = "test_trigger"

        result = await BotDescriptionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_description = mocker.MagicMock()
        mock_update.bot_description.description = "unknown_trigger"

        assert await BotDescriptionsFactory.create(mock_update) is None
