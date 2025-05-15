import pytest
from surfgram.types.user_profile_photos import UserProfilePhotos
from surfgram.types.user_profile_photos.factory import UserProfilePhotosFactory


class TestUserProfilePhotos:
    """Tests for UserProfilePhotos base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            UserProfilePhotos()

    @pytest.fixture
    def concrete_user_profile_photos(self):
        """Concrete UserProfilePhotos implementation for testing."""

        class ConcreteUserProfilePhotos(UserProfilePhotos):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteUserProfilePhotos

    def test_concrete_instantiation(self, concrete_user_profile_photos):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_user_profile_photos()
        assert isinstance(instance, UserProfilePhotos)


class TestUserProfilePhotosFactory:
    """Tests for UserProfilePhotosFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        UserProfilePhotosFactory.USERPROFILEPHOTOS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(UserProfilePhotos):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        UserProfilePhotosFactory.register_user_profile_photos(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.user_profile_photos = mocker.MagicMock()
        mock_update.user_profile_photos.photos = "test_trigger"

        result = await UserProfilePhotosFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.user_profile_photos = mocker.MagicMock()
        mock_update.user_profile_photos.photos = "unknown_trigger"

        assert await UserProfilePhotosFactory.create(mock_update) is None
