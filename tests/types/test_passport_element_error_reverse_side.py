import pytest
from surfgram.types.passport_element_error_reverse_side import (
    PassportElementErrorReverseSide,
)
from surfgram.types.passport_element_error_reverse_side.factory import (
    PassportElementErrorReverseSidesFactory,
)


class TestPassportElementErrorReverseSide:
    """Tests for PassportElementErrorReverseSide base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorReverseSide()

    @pytest.fixture
    def concrete_passport_element_error_reverse_side(self):
        """Concrete PassportElementErrorReverseSide implementation for testing."""

        class ConcretePassportElementErrorReverseSide(PassportElementErrorReverseSide):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportElementErrorReverseSide

    def test_concrete_instantiation(self, concrete_passport_element_error_reverse_side):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_element_error_reverse_side()
        assert isinstance(instance, PassportElementErrorReverseSide)


class TestPassportElementErrorReverseSidesFactory:
    """Tests for PassportElementErrorReverseSidesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorReverseSidesFactory.PASSPORTELEMENTERRORREVERSESIDES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorReverseSide):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportElementErrorReverseSidesFactory.register_passport_element_error_reverse_side(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_reverse_side = mocker.MagicMock()
        mock_update.passport_element_error_reverse_side.source = "test_trigger"

        result = await PassportElementErrorReverseSidesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_reverse_side = mocker.MagicMock()
        mock_update.passport_element_error_reverse_side.source = "unknown_trigger"

        assert await PassportElementErrorReverseSidesFactory.create(mock_update) is None
