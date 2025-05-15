import pytest
from surfgram.types.chat_location import ChatLocation
from surfgram.types.chat_location.factory import ChatLocationsFactory


class TestChatLocation:
    """Tests for ChatLocation base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChatLocation()

    @pytest.fixture
    def concrete_chat_location(self):
        """Concrete ChatLocation implementation for testing."""

        class ConcreteChatLocation(ChatLocation):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChatLocation

    def test_concrete_instantiation(self, concrete_chat_location):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chat_location()
        assert isinstance(instance, ChatLocation)


class TestChatLocationsFactory:
    """Tests for ChatLocationsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChatLocationsFactory.CHATLOCATIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChatLocation):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChatLocationsFactory.register_chat_location(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_location = mocker.MagicMock()
        mock_update.chat_location.address = "test_trigger"

        result = await ChatLocationsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chat_location = mocker.MagicMock()
        mock_update.chat_location.address = "unknown_trigger"

        assert await ChatLocationsFactory.create(mock_update) is None
