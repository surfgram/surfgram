import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.input_poll_option import InputPollOption
from surfgram.types.input_poll_option.factory import InputPollOptionsFactory


class TestInputPollOption:
    """Tests for InputPollOption base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputPollOption()

    @pytest.fixture
    def concrete_input_poll_option(self):
        """Concrete InputPollOption implementation for testing."""

        class ConcreteInputPollOption(InputPollOption):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInputPollOption()

    def test_concrete_instantiation(self, concrete_input_poll_option):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_input_poll_option, InputPollOption)


class TestInputPollOptionsFactory:
    """Tests for InputPollOptionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputPollOptionsFactory.INPUTPOLLOPTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputPollOption):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InputPollOptionsFactory.register_input_poll_option(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.input_poll_option = MagicMock()
        mock_update.input_poll_option.text = "test_trigger"

        result = await InputPollOptionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.input_poll_option = MagicMock()
        mock_update.input_poll_option.text = "unknown_trigger"

        assert await InputPollOptionsFactory.create(mock_update) is None
