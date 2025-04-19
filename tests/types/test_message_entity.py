import pytest
from unittest.mock import AsyncMock, MagicMock
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
            __callback__ = AsyncMock()

        return ConcreteMessageEntity()

    def test_concrete_instantiation(self, concrete_message_entity):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_message_entity, MessageEntity)


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
            __callback__ = AsyncMock()

        MessageEntitiesFactory.register_message_entity(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.message_entity = MagicMock()
        mock_update.message_entity.type = "test_trigger"

        result = await MessageEntitiesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.message_entity = MagicMock()
        mock_update.message_entity.type = "unknown_trigger"

        assert await MessageEntitiesFactory.create(mock_update) is None
