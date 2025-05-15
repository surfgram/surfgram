import pytest
from surfgram.types.file import File
from surfgram.types.file.factory import FilesFactory


class TestFile:
    """Tests for File base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            File()

    @pytest.fixture
    def concrete_file(self):
        """Concrete File implementation for testing."""

        class ConcreteFile(File):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteFile

    def test_concrete_instantiation(self, concrete_file):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_file()
        assert isinstance(instance, File)


class TestFilesFactory:
    """Tests for FilesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        FilesFactory.FILES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(File):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        FilesFactory.register_file(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.file = mocker.MagicMock()
        mock_update.file.file_id = "test_trigger"

        result = await FilesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.file = mocker.MagicMock()
        mock_update.file.file_id = "unknown_trigger"

        assert await FilesFactory.create(mock_update) is None
