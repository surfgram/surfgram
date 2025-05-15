import pytest
from surfgram.core.structures.configs import BaseConfig
from typing import Optional


class TestBaseConfig:
    def test_get_token_with_none(self):
        BaseConfig.__bot_token__ = None
        assert BaseConfig.get_token() is None

    def test_get_token_with_value(self):
        test_token = "test_token_123"
        BaseConfig.__bot_token__ = test_token
        assert BaseConfig.get_token() == test_token
        BaseConfig.__bot_token__ = None

    def test_get_listener_with_none(self):
        BaseConfig.__listener__ = None
        assert BaseConfig.get_listener() is None

    def test_get_listener_with_value(self):
        class MockListener:
            pass

        test_listener = MockListener()
        BaseConfig.__listener__ = test_listener
        assert BaseConfig.get_listener() == test_listener
        BaseConfig.__listener__ = None

    def test_class_variables_defaults(self):
        assert BaseConfig.__bot_token__ is None
        assert BaseConfig.__listener__ is None
