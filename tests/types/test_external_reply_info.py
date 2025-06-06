import pytest
from surfgram.types.external_reply_info import ExternalReplyInfo
from surfgram.types.external_reply_info.factory import ExternalReplyInfosFactory


class TestExternalReplyInfo:
    """Tests for ExternalReplyInfo base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ExternalReplyInfo()

    @pytest.fixture
    def concrete_external_reply_info(self):
        """Concrete ExternalReplyInfo implementation for testing."""

        class ConcreteExternalReplyInfo(ExternalReplyInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteExternalReplyInfo

    def test_concrete_instantiation(self, concrete_external_reply_info):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_external_reply_info()
        assert isinstance(instance, ExternalReplyInfo)


class TestExternalReplyInfosFactory:
    """Tests for ExternalReplyInfosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ExternalReplyInfosFactory.EXTERNALREPLYINFOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ExternalReplyInfo):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ExternalReplyInfosFactory.register_external_reply_info(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.external_reply_info = mocker.MagicMock()
        mock_update.external_reply_info.audio = "test_trigger"

        result = await ExternalReplyInfosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.external_reply_info = mocker.MagicMock()
        mock_update.external_reply_info.audio = "unknown_trigger"

        assert await ExternalReplyInfosFactory.create(mock_update) is None
