import pytest
from surfgram.types.background_fill_solid import BackgroundFillSolid
from surfgram.types.background_fill_solid.factory import BackgroundFillSolidsFactory


class TestBackgroundFillSolid:
    """Tests for BackgroundFillSolid base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BackgroundFillSolid()

    @pytest.fixture
    def concrete_background_fill_solid(self):
        """Concrete BackgroundFillSolid implementation for testing."""

        class ConcreteBackgroundFillSolid(BackgroundFillSolid):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBackgroundFillSolid

    def test_concrete_instantiation(self, concrete_background_fill_solid):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_background_fill_solid()
        assert isinstance(instance, BackgroundFillSolid)


class TestBackgroundFillSolidsFactory:
    """Tests for BackgroundFillSolidsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BackgroundFillSolidsFactory.BACKGROUNDFILLSOLIDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BackgroundFillSolid):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BackgroundFillSolidsFactory.register_background_fill_solid(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_fill_solid = mocker.MagicMock()
        mock_update.background_fill_solid.type = "test_trigger"

        result = await BackgroundFillSolidsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.background_fill_solid = mocker.MagicMock()
        mock_update.background_fill_solid.type = "unknown_trigger"

        assert await BackgroundFillSolidsFactory.create(mock_update) is None
