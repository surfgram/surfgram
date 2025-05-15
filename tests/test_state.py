import pytest
from dataclasses import asdict
from surfgram.core.fsm import State


class TestState:
    def test_default_initialization(self):
        state = State()
        assert state.name == ""
        assert state.attributes == {}

    def test_initialization_with_values(self):
        attrs = {"key1": "value1", "key2": 42}
        state = State(name="test_state", attributes=attrs)
        assert state.name == "test_state"
        assert state.attributes == attrs

    def test_set_attribute(self):
        state = State()

        state.set_attribute("new_key", "new_value")
        assert state.attributes["new_key"] == "new_value"

        state.set_attribute("new_key", "updated_value")
        assert state.attributes["new_key"] == "updated_value"

    def test_get_attribute_existing(self):
        attrs = {"exists": True, "count": 5}
        state = State(attributes=attrs)

        assert state.get_attribute("exists") is True
        assert state.get_attribute("count") == 5

    def test_get_attribute_missing_with_default(self):
        state = State(attributes={"exists": True})

        assert state.get_attribute("missing") is None
        assert state.get_attribute("missing", "default") == "default"
        assert state.get_attribute("missing", 0) == 0

    def test_dataclass_features(self):
        state1 = State(name="state1", attributes={"a": 1})
        state2 = State(name="state1", attributes={"a": 1})
        state3 = State(name="different", attributes={"a": 1})

        assert state1 == state2
        assert state1 != state3

        assert "State(" in repr(state1)
        assert "name='state1'" in repr(state1)
        assert "'a': 1" in repr(state1)

        assert asdict(state1) == {"name": "state1", "attributes": {"a": 1}}
