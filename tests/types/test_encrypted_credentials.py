import pytest
from surfgram.types.encrypted_credentials import EncryptedCredentials
from surfgram.types.encrypted_credentials.factory import EncryptedCredentialsFactory


class TestEncryptedCredentials:
    """Tests for EncryptedCredentials base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            EncryptedCredentials()

    @pytest.fixture
    def concrete_encrypted_credentials(self):
        """Concrete EncryptedCredentials implementation for testing."""

        class ConcreteEncryptedCredentials(EncryptedCredentials):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteEncryptedCredentials

    def test_concrete_instantiation(self, concrete_encrypted_credentials):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_encrypted_credentials()
        assert isinstance(instance, EncryptedCredentials)


class TestEncryptedCredentialsFactory:
    """Tests for EncryptedCredentialsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        EncryptedCredentialsFactory.ENCRYPTEDCREDENTIALS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(EncryptedCredentials):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        EncryptedCredentialsFactory.register_encrypted_credentials(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.encrypted_credentials = mocker.MagicMock()
        mock_update.encrypted_credentials.data = "test_trigger"

        result = await EncryptedCredentialsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.encrypted_credentials = mocker.MagicMock()
        mock_update.encrypted_credentials.data = "unknown_trigger"

        assert await EncryptedCredentialsFactory.create(mock_update) is None
