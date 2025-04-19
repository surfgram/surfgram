import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.poll_option import PollOption
from surfgram.types.poll_option.factory import PollOptionsFactory


class TestPollOption:
    """Tests for PollOption base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PollOption()

    @pytest.fixture
    def concrete_poll_option(self):
        """Concrete PollOption implementation for testing."""

        class ConcretePollOption(PollOption):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePollOption()

    def test_concrete_instantiation(self, concrete_poll_option):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_poll_option, PollOption)


class TestPollOptionsFactory:
    """Tests for PollOptionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PollOptionsFactory.POLLOPTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PollOption):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PollOptionsFactory.register_poll_option(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.poll_option = MagicMock()
        mock_update.poll_option.text = "test_trigger"

        result = await PollOptionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.poll_option = MagicMock()
        mock_update.poll_option.text = "unknown_trigger"

        assert await PollOptionsFactory.create(mock_update) is None
