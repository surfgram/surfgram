import pytest
from unittest.mock import AsyncMock, MagicMock
from surfgram.types.video_chat_participants_invited import VideoChatParticipantsInvited
from surfgram.types.video_chat_participants_invited.factory import (
    VideoChatParticipantsInvitedsFactory,
)


class TestVideoChatParticipantsInvited:
    """Tests for VideoChatParticipantsInvited base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            VideoChatParticipantsInvited()

    @pytest.fixture
    def concrete_video_chat_participants_invited(self):
        """Concrete VideoChatParticipantsInvited implementation for testing."""

        class ConcreteVideoChatParticipantsInvited(VideoChatParticipantsInvited):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        return ConcreteVideoChatParticipantsInvited()

    def test_concrete_instantiation(self, concrete_video_chat_participants_invited):
        """Should allow instantiation of concrete subclasses."""
        assert isinstance(
            concrete_video_chat_participants_invited, VideoChatParticipantsInvited
        )


class TestVideoChatParticipantsInvitedsFactory:
    """Tests for VideoChatParticipantsInvitedsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        VideoChatParticipantsInvitedsFactory.VIDEOCHATPARTICIPANTSINVITEDS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(VideoChatParticipantsInvited):
            __names__ = ["test_trigger"]
            __callback__ = AsyncMock()

        VideoChatParticipantsInvitedsFactory.register_video_chat_participants_invited(
            TestHandler
        )
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler):
        """Should return handler instance when trigger matches."""
        mock_update = MagicMock()
        mock_update.video_chat_participants_invited = MagicMock()
        mock_update.video_chat_participants_invited.users = "test_trigger"

        result = await VideoChatParticipantsInvitedsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self):
        """Should return None when no handler matches."""
        mock_update = MagicMock()
        mock_update.video_chat_participants_invited = MagicMock()
        mock_update.video_chat_participants_invited.users = "unknown_trigger"

        assert await VideoChatParticipantsInvitedsFactory.create(mock_update) is None
