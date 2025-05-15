import pytest
from surfgram.types.force_reply import ForceReply
from surfgram.types.force_reply.factory import ForceRepliesFactory


class TestForceReply:
    """Tests for ForceReply base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ForceReply()

    @pytest.fixture
    def concrete_force_reply(self):
        """Concrete ForceReply implementation for testing."""

        class ConcreteForceReply(ForceReply):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteForceReply

    def test_concrete_instantiation(self, concrete_force_reply):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_force_reply()
        assert isinstance(instance, ForceReply)


class TestForceRepliesFactory:
    """Tests for ForceRepliesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ForceRepliesFactory.FORCEREPLIES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ForceReply):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ForceRepliesFactory.register_force_reply(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.force_reply = mocker.MagicMock()
        mock_update.force_reply.input_field_placeholder = "test_trigger"

        result = await ForceRepliesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.force_reply = mocker.MagicMock()
        mock_update.force_reply.input_field_placeholder = "unknown_trigger"

        assert await ForceRepliesFactory.create(mock_update) is None
