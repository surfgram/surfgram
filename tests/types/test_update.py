import pytest
from surfgram.types.update import Update
from surfgram.types.update.factory import UpdatesFactory


class TestUpdate:
    """Tests for Update base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Update()

    @pytest.fixture
    def concrete_update(self):
        """Concrete Update implementation for testing."""

        class ConcreteUpdate(Update):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteUpdate

    def test_concrete_instantiation(self, concrete_update):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_update()
        assert isinstance(instance, Update)


class TestUpdatesFactory:
    """Tests for UpdatesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UpdatesFactory.UPDATES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Update):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        UpdatesFactory.register_update(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.update = mocker.MagicMock()
        mock_update.update.inline_query = "test_trigger"

        result = await UpdatesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.update = mocker.MagicMock()
        mock_update.update.inline_query = "unknown_trigger"

        assert await UpdatesFactory.create(mock_update) is None
