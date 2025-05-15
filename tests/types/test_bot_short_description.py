import pytest
from surfgram.types.bot_short_description import BotShortDescription
from surfgram.types.bot_short_description.factory import BotShortDescriptionsFactory


class TestBotShortDescription:
    """Tests for BotShortDescription base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BotShortDescription()

    @pytest.fixture
    def concrete_bot_short_description(self):
        """Concrete BotShortDescription implementation for testing."""

        class ConcreteBotShortDescription(BotShortDescription):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBotShortDescription

    def test_concrete_instantiation(self, concrete_bot_short_description):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_bot_short_description()
        assert isinstance(instance, BotShortDescription)


class TestBotShortDescriptionsFactory:
    """Tests for BotShortDescriptionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BotShortDescriptionsFactory.BOTSHORTDESCRIPTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BotShortDescription):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BotShortDescriptionsFactory.register_bot_short_description(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_short_description = mocker.MagicMock()
        mock_update.bot_short_description.short_description = "test_trigger"

        result = await BotShortDescriptionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.bot_short_description = mocker.MagicMock()
        mock_update.bot_short_description.short_description = "unknown_trigger"

        assert await BotShortDescriptionsFactory.create(mock_update) is None
