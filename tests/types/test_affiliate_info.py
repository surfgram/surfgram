import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.affiliate_info import AffiliateInfo
from surfgram.types.affiliate_info.factory import AffiliateInfosFactory


class TestAffiliateInfo:
    """Tests for AffiliateInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            AffiliateInfo()

    @pytest.fixture
    def concrete_affiliate_info(self):
        """Concrete AffiliateInfo implementation for testing."""

        class ConcreteAffiliateInfo(AffiliateInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteAffiliateInfo()

    def test_concrete_instantiation(self, concrete_affiliate_info):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_affiliate_info, AffiliateInfo)


class TestAffiliateInfosFactory:
    """Tests for AffiliateInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        AffiliateInfosFactory.AFFILIATEINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(AffiliateInfo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        AffiliateInfosFactory.register_affiliate_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.affiliate_info = MagicMock()
        mock_update.affiliate_info.affiliate_user = "test_trigger"

        result = await AffiliateInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.affiliate_info = MagicMock()
        mock_update.affiliate_info.affiliate_user = "unknown_trigger"

        assert await AffiliateInfosFactory.create(mock_update) is None
