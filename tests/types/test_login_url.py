import pytest
from surfgram.types.login_url import LoginUrl
from surfgram.types.login_url.factory import LoginUrlsFactory


class TestLoginUrl:
    """Tests for LoginUrl base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            LoginUrl()

    @pytest.fixture
    def concrete_login_url(self):
        """Concrete LoginUrl implementation for testing."""

        class ConcreteLoginUrl(LoginUrl):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteLoginUrl

    def test_concrete_instantiation(self, concrete_login_url):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_login_url()
        assert isinstance(instance, LoginUrl)


class TestLoginUrlsFactory:
    """Tests for LoginUrlsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        LoginUrlsFactory.LOGINURLS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(LoginUrl):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        LoginUrlsFactory.register_login_url(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.login_url = mocker.MagicMock()
        mock_update.login_url.forward_text = "test_trigger"

        result = await LoginUrlsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.login_url = mocker.MagicMock()
        mock_update.login_url.forward_text = "unknown_trigger"

        assert await LoginUrlsFactory.create(mock_update) is None
