import pytest
from surfgram.types.passport_element_error_unspecified import (
    PassportElementErrorUnspecified,
)
from surfgram.types.passport_element_error_unspecified.factory import (
    PassportElementErrorUnspecifiedsFactory,
)


class TestPassportElementErrorUnspecified:
    """Tests for PassportElementErrorUnspecified base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportElementErrorUnspecified()

    @pytest.fixture
    def concrete_passport_element_error_unspecified(self):
        """Concrete PassportElementErrorUnspecified implementation for testing."""

        class ConcretePassportElementErrorUnspecified(PassportElementErrorUnspecified):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportElementErrorUnspecified

    def test_concrete_instantiation(self, concrete_passport_element_error_unspecified):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_element_error_unspecified()
        assert isinstance(instance, PassportElementErrorUnspecified)


class TestPassportElementErrorUnspecifiedsFactory:
    """Tests for PassportElementErrorUnspecifiedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportElementErrorUnspecifiedsFactory.PASSPORTELEMENTERRORUNSPECIFIEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportElementErrorUnspecified):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportElementErrorUnspecifiedsFactory.register_passport_element_error_unspecified(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_unspecified = mocker.MagicMock()
        mock_update.passport_element_error_unspecified.source = "test_trigger"

        result = await PassportElementErrorUnspecifiedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_element_error_unspecified = mocker.MagicMock()
        mock_update.passport_element_error_unspecified.source = "unknown_trigger"

        assert await PassportElementErrorUnspecifiedsFactory.create(mock_update) is None
