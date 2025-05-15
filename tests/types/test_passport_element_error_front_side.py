import pytest
from surfgram.types.passport_element_error_front_side import (
    PassportElementErrorFrontSide,
)
from surfgram.types.passport_element_error_front_side.factory import (
    PassportElementErrorFrontSidesFactory,
)


class TestPassportElementErrorFrontSide:
    """Tests for PassportElementErrorFrontSide base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorFrontSide()

    @pytest.fixture
    def concrete_passport_element_error_front_side(self):
        """Concrete PassportElementErrorFrontSide implementation for testing."""

        class ConcretePassportElementErrorFrontSide(PassportElementErrorFrontSide):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportElementErrorFrontSide

    def test_concrete_instantiation(self, concrete_passport_element_error_front_side):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_element_error_front_side()
        assert isinstance(instance, PassportElementErrorFrontSide)


class TestPassportElementErrorFrontSidesFactory:
    """Tests for PassportElementErrorFrontSidesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorFrontSidesFactory.PASSPORTELEMENTERRORFRONTSIDES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorFrontSide):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportElementErrorFrontSidesFactory.register_passport_element_error_front_side(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_front_side = mocker.MagicMock()
        mock_update.passport_element_error_front_side.source = "test_trigger"

        result = await PassportElementErrorFrontSidesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_front_side = mocker.MagicMock()
        mock_update.passport_element_error_front_side.source = "unknown_trigger"

        assert await PassportElementErrorFrontSidesFactory.create(mock_update) is None
