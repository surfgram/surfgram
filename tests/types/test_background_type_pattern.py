import pytest
from surfgram.types.background_type_pattern import BackgroundTypePattern
from surfgram.types.background_type_pattern.factory import BackgroundTypePatternsFactory


class TestBackgroundTypePattern:
    """Tests for BackgroundTypePattern base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundTypePattern()

    @pytest.fixture
    def concrete_background_type_pattern(self):
        """Concrete BackgroundTypePattern implementation for testing."""

        class ConcreteBackgroundTypePattern(BackgroundTypePattern):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBackgroundTypePattern

    def test_concrete_instantiation(self, concrete_background_type_pattern):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_background_type_pattern()
        assert isinstance(instance, BackgroundTypePattern)


class TestBackgroundTypePatternsFactory:
    """Tests for BackgroundTypePatternsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundTypePatternsFactory.BACKGROUNDTYPEPATTERNS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundTypePattern):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BackgroundTypePatternsFactory.register_background_type_pattern(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_type_pattern = mocker.MagicMock()
        mock_update.background_type_pattern.document = "test_trigger"

        result = await BackgroundTypePatternsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_type_pattern = mocker.MagicMock()
        mock_update.background_type_pattern.document = "unknown_trigger"

        assert await BackgroundTypePatternsFactory.create(mock_update) is None
