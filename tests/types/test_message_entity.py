import pytest
from surfgram.types.message_entity import MessageEntity
from surfgram.types.message_entity.factory import MessageEntitiesFactory


class TestMessageEntity:
    """Tests for MessageEntity base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            MessageEntity()

    @pytest.fixture
    def concrete_message_entity(self):
        """Concrete MessageEntity implementation for testing."""

        class ConcreteMessageEntity(MessageEntity):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteMessageEntity

    def test_concrete_instantiation(self, concrete_message_entity):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_message_entity()
        assert isinstance(instance, MessageEntity)


class TestMessageEntitiesFactory:
    """Tests for MessageEntitiesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        MessageEntitiesFactory.MESSAGEENTITIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(MessageEntity):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        MessageEntitiesFactory.register_message_entity(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_entity = mocker.MagicMock()
        mock_update.message_entity.type = "test_trigger"

        result = await MessageEntitiesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.message_entity = mocker.MagicMock()
        mock_update.message_entity.type = "unknown_trigger"

        assert await MessageEntitiesFactory.create(mock_update) is None
