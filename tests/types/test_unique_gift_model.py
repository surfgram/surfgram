import pytest
from surfgram.types.unique_gift_model import UniqueGiftModel
from surfgram.types.unique_gift_model.factory import UniqueGiftModelsFactory


class TestUniqueGiftModel:
    """Tests for UniqueGiftModel base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UniqueGiftModel()

    @pytest.fixture
    def concrete_unique_gift_model(self):
        """Concrete UniqueGiftModel implementation for testing."""

        class ConcreteUniqueGiftModel(UniqueGiftModel):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteUniqueGiftModel

    def test_concrete_instantiation(self, concrete_unique_gift_model):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_unique_gift_model()
        assert isinstance(instance, UniqueGiftModel)


class TestUniqueGiftModelsFactory:
    """Tests for UniqueGiftModelsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UniqueGiftModelsFactory.UNIQUEGIFTMODELS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UniqueGiftModel):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        UniqueGiftModelsFactory.register_unique_gift_model(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift_model = mocker.MagicMock()
        mock_update.unique_gift_model.sticker = "test_trigger"

        result = await UniqueGiftModelsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.unique_gift_model = mocker.MagicMock()
        mock_update.unique_gift_model.sticker = "unknown_trigger"

        assert await UniqueGiftModelsFactory.create(mock_update) is None
