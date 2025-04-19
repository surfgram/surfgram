import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.write_access_allowed import WriteAccessAllowed
from surfgram.types.write_access_allowed.factory import WriteAccessAllowedsFactory


class TestWriteAccessAllowed:
    """Tests for WriteAccessAllowed base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            WriteAccessAllowed()

    @pytest.fixture
    def concrete_write_access_allowed(self):
        """Concrete WriteAccessAllowed implementation for testing."""

        class ConcreteWriteAccessAllowed(WriteAccessAllowed):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteWriteAccessAllowed()

    def test_concrete_instantiation(self, concrete_write_access_allowed):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_write_access_allowed, WriteAccessAllowed)


class TestWriteAccessAllowedsFactory:
    """Tests for WriteAccessAllowedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        WriteAccessAllowedsFactory.WRITEACCESSALLOWEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(WriteAccessAllowed):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        WriteAccessAllowedsFactory.register_write_access_allowed(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.write_access_allowed = MagicMock()
        mock_update.write_access_allowed.web_app_name = "test_trigger"

        result = await WriteAccessAllowedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.write_access_allowed = MagicMock()
        mock_update.write_access_allowed.web_app_name = "unknown_trigger"

        assert await WriteAccessAllowedsFactory.create(mock_update) is None
