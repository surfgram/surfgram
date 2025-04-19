import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.business_intro import BusinessIntro
from surfgram.types.business_intro.factory import BusinessIntrosFactory


class TestBusinessIntro:
    """Tests for BusinessIntro base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessIntro()

    @pytest.fixture
    def concrete_business_intro(self):
        """Concrete BusinessIntro implementation for testing."""

        class ConcreteBusinessIntro(BusinessIntro):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteBusinessIntro()

    def test_concrete_instantiation(self, concrete_business_intro):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_business_intro, BusinessIntro)


class TestBusinessIntrosFactory:
    """Tests for BusinessIntrosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessIntrosFactory.BUSINESSINTROS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessIntro):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        BusinessIntrosFactory.register_business_intro(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.business_intro = MagicMock()
        mock_update.business_intro.title = "test_trigger"

        result = await BusinessIntrosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.business_intro = MagicMock()
        mock_update.business_intro.title = "unknown_trigger"

        assert await BusinessIntrosFactory.create(mock_update) is None
