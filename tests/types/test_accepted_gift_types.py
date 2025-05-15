import pytest
from surfgram.types.accepted_gift_types import AcceptedGiftTypes
from surfgram.types.accepted_gift_types.factory import AcceptedGiftTypesFactory


class TestAcceptedGiftTypes:
    """Tests for AcceptedGiftTypes base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            AcceptedGiftTypes()

    @pytest.fixture
    def concrete_accepted_gift_types(self):
        """Concrete AcceptedGiftTypes implementation for testing."""

        class ConcreteAcceptedGiftTypes(AcceptedGiftTypes):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteAcceptedGiftTypes

    def test_concrete_instantiation(self, concrete_accepted_gift_types):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_accepted_gift_types()
        assert isinstance(instance, AcceptedGiftTypes)


class TestAcceptedGiftTypesFactory:
    """Tests for AcceptedGiftTypesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        AcceptedGiftTypesFactory.ACCEPTEDGIFTTYPES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(AcceptedGiftTypes):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        AcceptedGiftTypesFactory.register_accepted_gift_types(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.accepted_gift_types = mocker.MagicMock()
        mock_update.accepted_gift_types.unlimited_gifts = "test_trigger"

        result = await AcceptedGiftTypesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.accepted_gift_types = mocker.MagicMock()
        mock_update.accepted_gift_types.unlimited_gifts = "unknown_trigger"

        assert await AcceptedGiftTypesFactory.create(mock_update) is None
