import pytest
from surfgram.types.link_preview_options import LinkPreviewOptions
from surfgram.types.link_preview_options.factory import LinkPreviewOptionsFactory


class TestLinkPreviewOptions:
    """Tests for LinkPreviewOptions base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            LinkPreviewOptions()

    @pytest.fixture
    def concrete_link_preview_options(self):
        """Concrete LinkPreviewOptions implementation for testing."""

        class ConcreteLinkPreviewOptions(LinkPreviewOptions):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteLinkPreviewOptions

    def test_concrete_instantiation(self, concrete_link_preview_options):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_link_preview_options()
        assert isinstance(instance, LinkPreviewOptions)


class TestLinkPreviewOptionsFactory:
    """Tests for LinkPreviewOptionsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        LinkPreviewOptionsFactory.LINKPREVIEWOPTIONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(LinkPreviewOptions):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        LinkPreviewOptionsFactory.register_link_preview_options(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.link_preview_options = mocker.MagicMock()
        mock_update.link_preview_options.show_above_text = "test_trigger"

        result = await LinkPreviewOptionsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.link_preview_options = mocker.MagicMock()
        mock_update.link_preview_options.show_above_text = "unknown_trigger"

        assert await LinkPreviewOptionsFactory.create(mock_update) is None
