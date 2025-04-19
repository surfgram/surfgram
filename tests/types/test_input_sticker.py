import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.input_sticker import InputSticker
from surfgram.types.input_sticker.factory import InputStickersFactory


class TestInputSticker:
    """Tests for InputSticker base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            InputSticker()

    @pytest.fixture
    def concrete_input_sticker(self):
        """Concrete InputSticker implementation for testing."""

        class ConcreteInputSticker(InputSticker):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteInputSticker()

    def test_concrete_instantiation(self, concrete_input_sticker):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_input_sticker, InputSticker)


class TestInputStickersFactory:
    """Tests for InputStickersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        InputStickersFactory.INPUTSTICKERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(InputSticker):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        InputStickersFactory.register_input_sticker(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.input_sticker = MagicMock()
        mock_update.input_sticker.sticker = "test_trigger"

        result = await InputStickersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.input_sticker = MagicMock()
        mock_update.input_sticker.sticker = "unknown_trigger"

        assert await InputStickersFactory.create(mock_update) is None
