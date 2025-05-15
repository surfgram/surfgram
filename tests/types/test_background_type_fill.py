import pytest
from surfgram.types.background_type_fill import BackgroundTypeFill
from surfgram.types.background_type_fill.factory import BackgroundTypeFillsFactory


class TestBackgroundTypeFill:
    """Tests for BackgroundTypeFill base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundTypeFill()

    @pytest.fixture
    def concrete_background_type_fill(self):
        """Concrete BackgroundTypeFill implementation for testing."""

        class ConcreteBackgroundTypeFill(BackgroundTypeFill):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBackgroundTypeFill

    def test_concrete_instantiation(self, concrete_background_type_fill):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_background_type_fill()
        assert isinstance(instance, BackgroundTypeFill)


class TestBackgroundTypeFillsFactory:
    """Tests for BackgroundTypeFillsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundTypeFillsFactory.BACKGROUNDTYPEFILLS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundTypeFill):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BackgroundTypeFillsFactory.register_background_type_fill(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_type_fill = mocker.MagicMock()
        mock_update.background_type_fill.type = "test_trigger"

        result = await BackgroundTypeFillsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_type_fill = mocker.MagicMock()
        mock_update.background_type_fill.type = "unknown_trigger"

        assert await BackgroundTypeFillsFactory.create(mock_update) is None
