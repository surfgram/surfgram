import pytest
from surfgram.types.business_bot_rights import BusinessBotRights
from surfgram.types.business_bot_rights.factory import BusinessBotRightsFactory


class TestBusinessBotRights:
    """Tests for BusinessBotRights base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            BusinessBotRights()

    @pytest.fixture
    def concrete_business_bot_rights(self):
        """Concrete BusinessBotRights implementation for testing."""

        class ConcreteBusinessBotRights(BusinessBotRights):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteBusinessBotRights

    def test_concrete_instantiation(self, concrete_business_bot_rights):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_business_bot_rights()
        assert isinstance(instance, BusinessBotRights)


class TestBusinessBotRightsFactory:
    """Tests for BusinessBotRightsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        BusinessBotRightsFactory.BUSINESSBOTRIGHTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(BusinessBotRights):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        BusinessBotRightsFactory.register_business_bot_rights(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_bot_rights = mocker.MagicMock()
        mock_update.business_bot_rights.can_edit_profile_photo = "test_trigger"

        result = await BusinessBotRightsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.business_bot_rights = mocker.MagicMock()
        mock_update.business_bot_rights.can_edit_profile_photo = "unknown_trigger"

        assert await BusinessBotRightsFactory.create(mock_update) is None
