import pytest
from surfgram.types.reply_parameters import ReplyParameters
from surfgram.types.reply_parameters.factory import ReplyParametersFactory


class TestReplyParameters:
    """Tests for ReplyParameters base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ReplyParameters()

    @pytest.fixture
    def concrete_reply_parameters(self):
        """Concrete ReplyParameters implementation for testing."""

        class ConcreteReplyParameters(ReplyParameters):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteReplyParameters

    def test_concrete_instantiation(self, concrete_reply_parameters):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_reply_parameters()
        assert isinstance(instance, ReplyParameters)


class TestReplyParametersFactory:
    """Tests for ReplyParametersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ReplyParametersFactory.REPLYPARAMETERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ReplyParameters):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ReplyParametersFactory.register_reply_parameters(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.reply_parameters = mocker.MagicMock()
        mock_update.reply_parameters.quote = "test_trigger"

        result = await ReplyParametersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.reply_parameters = mocker.MagicMock()
        mock_update.reply_parameters.quote = "unknown_trigger"

        assert await ReplyParametersFactory.create(mock_update) is None
