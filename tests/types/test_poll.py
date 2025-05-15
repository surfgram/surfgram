import pytest
from surfgram.types.poll import Poll
from surfgram.types.poll.factory import PollsFactory


class TestPoll:
    """Tests for Poll base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Poll()

    @pytest.fixture
    def concrete_poll(self):
        """Concrete Poll implementation for testing."""

        class ConcretePoll(Poll):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePoll

    def test_concrete_instantiation(self, concrete_poll):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_poll()
        assert isinstance(instance, Poll)


class TestPollsFactory:
    """Tests for PollsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PollsFactory.POLLS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Poll):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PollsFactory.register_poll(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.poll = mocker.MagicMock()
        mock_update.poll.question = "test_trigger"

        result = await PollsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.poll = mocker.MagicMock()
        mock_update.poll.question = "unknown_trigger"

        assert await PollsFactory.create(mock_update) is None
