import pytest
from surfgram.types.passport_file import PassportFile
from surfgram.types.passport_file.factory import PassportFilesFactory


class TestPassportFile:
    """Tests for PassportFile base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            PassportFile()

    @pytest.fixture
    def concrete_passport_file(self):
        """Concrete PassportFile implementation for testing."""

        class ConcretePassportFile(PassportFile):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcretePassportFile

    def test_concrete_instantiation(self, concrete_passport_file):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_passport_file()
        assert isinstance(instance, PassportFile)


class TestPassportFilesFactory:
    """Tests for PassportFilesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        PassportFilesFactory.PASSPORTFILES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(PassportFile):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        PassportFilesFactory.register_passport_file(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_file = mocker.MagicMock()
        mock_update.passport_file.file_id = "test_trigger"

        result = await PassportFilesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.passport_file = mocker.MagicMock()
        mock_update.passport_file.file_id = "unknown_trigger"

        assert await PassportFilesFactory.create(mock_update) is None
