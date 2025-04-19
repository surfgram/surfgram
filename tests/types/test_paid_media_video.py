import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.paid_media_video import PaidMediaVideo
from surfgram.types.paid_media_video.factory import PaidMediaVideosFactory


class TestPaidMediaVideo:
    """Tests for PaidMediaVideo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PaidMediaVideo()

    @pytest.fixture
    def concrete_paid_media_video(self):
        """Concrete PaidMediaVideo implementation for testing."""

        class ConcretePaidMediaVideo(PaidMediaVideo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcretePaidMediaVideo()

    def test_concrete_instantiation(self, concrete_paid_media_video):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(concrete_paid_media_video, PaidMediaVideo)


class TestPaidMediaVideosFactory:
    """Tests for PaidMediaVideosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PaidMediaVideosFactory.PAIDMEDIAVIDEOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PaidMediaVideo):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        PaidMediaVideosFactory.register_paid_media_video(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.paid_media_video = MagicMock()
        mock_update.paid_media_video.video = "test_trigger"

        result = await PaidMediaVideosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.paid_media_video = MagicMock()
        mock_update.paid_media_video.video = "unknown_trigger"

        assert await PaidMediaVideosFactory.create(mock_update) is None
