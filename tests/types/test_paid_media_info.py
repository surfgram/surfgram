import pytest
from surfgram.types.paid_media_info import PaidMediaInfo
from surfgram.types.paid_media_info.factory import PaidMediaInfosFactory


class TestPaidMediaInfo:
    """Tests for PaidMediaInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PaidMediaInfo()

    @pytest.fixture
    def concrete_paid_media_info(self):
        """Concrete PaidMediaInfo implementation for testing."""

        class ConcretePaidMediaInfo(PaidMediaInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePaidMediaInfo

    def test_concrete_instantiation(self, concrete_paid_media_info):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_paid_media_info()
        assert isinstance(instance, PaidMediaInfo)


class TestPaidMediaInfosFactory:
    """Tests for PaidMediaInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PaidMediaInfosFactory.PAIDMEDIAINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PaidMediaInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PaidMediaInfosFactory.register_paid_media_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_media_info = mocker.MagicMock()
        mock_update.paid_media_info.star_count = "test_trigger"

        result = await PaidMediaInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.paid_media_info = mocker.MagicMock()
        mock_update.paid_media_info.star_count = "unknown_trigger"

        assert await PaidMediaInfosFactory.create(mock_update) is None
