import pytest

from surfgram.configs import BaseConfig


class TestBaseConfig:

    def test_get_token_without_setting(self):
        """Test retrieving the bot token before it's set."""
        assert BaseConfig.get_token() is None

    def test_set_and_get_token(self):
        """Test setting and retrieving the bot token."""
        test_token = "1234567890:ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567"
        BaseConfig.__bot_token__ = test_token
        assert BaseConfig.get_token() == test_token

    def test_get_listener_without_setting(self):
        """Test retrieving the listener before it's set."""
        assert BaseConfig.get_listener() is None

    def test_set_and_get_listener(self):
        """Test setting and retrieving the listener."""
        mock_listener = object()  # Replace this with a specific listener mock if needed
        BaseConfig.__listener__ = mock_listener
        assert BaseConfig.get_listener() is mock_listener

    def test_set_listener_to_none(self):
        """Test setting the listener to None."""
        BaseConfig.__listener__ = None
        assert BaseConfig.get_listener() is None
