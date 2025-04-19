import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.paid_media_preview import PaidMediaPreview
from surfgram.types.paid_media_preview.factory import PaidMediaPreviewsFactory


class TestPaidMediaPreview:
    """Tests for PaidMediaPreview base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PaidMediaPreview()

    @pytest.fixture
    def concrete_paid_media_preview(self):
        """Concrete PaidMediaPreview implementation for testing."""

        class ConcretePaidMediaPreview(PaidMediaPreview):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePaidMediaPreview()

    def test_concrete_instantiation(self, concrete_paid_media_preview):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_paid_media_preview, PaidMediaPreview)


class TestPaidMediaPreviewsFactory:
    """Tests for PaidMediaPreviewsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PaidMediaPreviewsFactory.PAIDMEDIAPREVIEWS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PaidMediaPreview):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PaidMediaPreviewsFactory.register_paid_media_preview(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.paid_media_preview = MagicMock()
        mock_update.paid_media_preview.type = "test_trigger"

        result = await PaidMediaPreviewsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.paid_media_preview = MagicMock()
        mock_update.paid_media_preview.type = "unknown_trigger"

        assert await PaidMediaPreviewsFactory.create(mock_update) is None
