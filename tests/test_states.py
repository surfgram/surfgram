import pytest
from surfgram import fsm
from typing import Any, Dict


# Fixtures
@pytest.fixture
def clean_states():
    """Fixture to clean states storage before each test"""

    class TestStates(fsm.States):
        STATE_A = fsm.State()
        STATE_B = fsm.State()
        STATE_C = fsm.State()

    yield TestStates
    # Cleanup after test
    for chat_id in list(TestStates._states_storage.keys()):
        TestStates.reset(chat_id)


@pytest.fixture
def state_instance():
    """Fixture providing clean State instance"""
    return fsm.State()


class TestState:
    def test_initial_state_has_empty_attributes(self, state_instance):
        assert state_instance.attributes == {}
        assert len(state_instance.attributes) == 0

    @pytest.mark.parametrize(
        "name,value",
        [
            ("string", "value"),
            ("int", 42),
            ("float", 3.14),
            ("bool", True),
            ("list", [1, 2, 3]),
            ("dict", {"key": "value"}),
            ("none", None),
        ],
    )
    def test_set_get_attribute_types(self, state_instance, name: str, value: Any):
        state_instance.set_attribute(name, value)
        assert state_instance.get_attribute(name) == value
        assert state_instance.attributes[name] == value

    def test_get_nonexistent_attribute_returns_default(self, state_instance):
        assert state_instance.get_attribute("missing") is None
        assert state_instance.get_attribute("missing", "default") == "default"

    def test_attribute_overwrite(self, state_instance):
        state_instance.set_attribute("test", "initial")
        state_instance.set_attribute("test", "updated")
        assert state_instance.get_attribute("test") == "updated"

    def test_multiple_attributes(self, state_instance):
        data = {"a": 1, "b": 2, "c": 3}
        for k, v in data.items():
            state_instance.set_attribute(k, v)

        assert len(state_instance.attributes) == 3
        for k, v in data.items():
            assert state_instance.get_attribute(k) == v


class TestStates:
    def test_turn_state(self, clean_states):
        clean_states.turn(clean_states.STATE_A, 123)
        assert clean_states.get_current(123) is clean_states.STATE_A

    def test_state_transitions(self, clean_states):
        chat_id = 123
        states = [clean_states.STATE_A, clean_states.STATE_B, clean_states.STATE_C]

        for state in states:
            clean_states.turn(state, chat_id)
            assert clean_states.is_current(state, chat_id)

    def test_reset_state(self, clean_states):
        chat_id = 123
        clean_states.turn(clean_states.STATE_A, chat_id)
        clean_states.reset(chat_id)
        assert clean_states.get_current(chat_id) is None

    def test_multiple_chats_independent(self, clean_states):
        chat_data = {
            1: clean_states.STATE_A,
            2: clean_states.STATE_B,
            3: clean_states.STATE_C,
        }

        for chat_id, state in chat_data.items():
            clean_states.turn(state, chat_id)

        for chat_id, state in chat_data.items():
            assert clean_states.is_current(state, chat_id)
            assert clean_states.get_current(chat_id) is state

    def test_state_attributes_persistence(self, clean_states):
        chat_id = 123
        clean_states.turn(clean_states.STATE_A, chat_id)

        test_data = {"user": "John", "progress": 75, "settings": {"dark_mode": True}}

        for key, value in test_data.items():
            clean_states.set_attribute(chat_id, key, value)

        for key, value in test_data.items():
            assert clean_states.get_attribute(chat_id, key) == value

    def test_nonexistent_chat_handling(self, clean_states):
        assert clean_states.get_current(999) is None
        assert clean_states.get_attribute(999, "any") is None
        assert clean_states.is_current(clean_states.STATE_A, 999) is False

    def test_received_alias(self, clean_states):
        chat_id = 123
        clean_states.turn(clean_states.STATE_A, chat_id)
        assert clean_states.received(clean_states.STATE_A, chat_id)
        assert not clean_states.received(clean_states.STATE_B, chat_id)

    def test_attribute_manipulation_without_state(self, clean_states):
        """Tests that attribute methods don't fail when no state is set"""
        chat_id = 999  # No state set for this chat
        clean_states.set_attribute(chat_id, "test", "value")  # Should not raise
        assert clean_states.get_attribute(chat_id, "test") is None
