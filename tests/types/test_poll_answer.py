import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.poll_answer import PollAnswer
from surfgram.types.poll_answer.factory import PollAnswersFactory


class TestPollAnswer:
    """Tests for PollAnswer base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PollAnswer()

    @pytest.fixture
    def concrete_poll_answer(self):
        """Concrete PollAnswer implementation for testing."""

        class ConcretePollAnswer(PollAnswer):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePollAnswer()

    def test_concrete_instantiation(self, concrete_poll_answer):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_poll_answer, PollAnswer)


class TestPollAnswersFactory:
    """Tests for PollAnswersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PollAnswersFactory.POLLANSWERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PollAnswer):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PollAnswersFactory.register_poll_answer(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.poll_answer = MagicMock()
        mock_update.poll_answer.poll_id = "test_trigger"

        result = await PollAnswersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.poll_answer = MagicMock()
        mock_update.poll_answer.poll_id = "unknown_trigger"

        assert await PollAnswersFactory.create(mock_update) is None
