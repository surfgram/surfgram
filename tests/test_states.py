import pytest
from surfgram.core.fsm import BaseStorage
from surfgram.core.fsm import State
from surfgram.core.fsm import States


class TestStates:
    @pytest.fixture
    def mock_storage(self, mocker):
        mock = mocker.MagicMock(spec=BaseStorage)
        mock.return_value = mock
        return mock

    @pytest.fixture
    def test_state(self):
        return State(name="test_state", attributes={})

    @pytest.fixture
    def states_class(self, mocker, mock_storage):
        class TestStates(States):
            __provider__ = mock_storage
            state1 = State(name="state1", attributes={})
            state2 = State(name="state2", attributes={})

        if hasattr(TestStates, "_storage_instances"):
            TestStates._storage_instances.clear()
        return TestStates

    def test_get_storage_creates_new_instance(self, states_class, mock_storage):
        storage = states_class._get_storage()
        assert storage == mock_storage.return_value
        assert states_class._storage_instances[states_class] == storage

    def test_get_storage_returns_existing_instance(self, states_class, mock_storage):
        existing_storage = mock_storage.return_value
        states_class._storage_instances[states_class] = existing_storage
        storage = states_class._get_storage()
        assert storage == existing_storage

    def test_turn_sets_state_with_attributes(
        self, states_class, mock_storage, test_state
    ):
        test_state.attributes = {"key": "value"}
        states_class.turn(test_state, 123)
        mock_storage.return_value.set_state.assert_called_once_with(
            123, {"_current_state": "test_state", "key": "value"}
        )

    def test_get_current_returns_none_for_no_state(self, states_class, mock_storage):
        mock_storage.return_value.get_state.return_value = None
        assert states_class.get_current(123) is None

    def test_get_current_returns_none_for_missing_state_name(
        self, states_class, mock_storage
    ):
        mock_storage.return_value.get_state.return_value = {"some_key": "value"}
        assert states_class.get_current(123) is None

    def test_get_current_returns_state_with_attributes(
        self, states_class, mock_storage
    ):
        state_data = {
            "_current_state": "TestStates.state1",
            "attr1": "value1",
            "attr2": "value2",
        }
        mock_storage.return_value.get_state.return_value = state_data

        result = states_class.get_current(123)
        assert result is not None
        assert result.name == "TestStates.state1"
        assert result.attributes == {"attr1": "value1", "attr2": "value2"}

    def test_get_current_returns_none_for_unknown_state(
        self, states_class, mock_storage
    ):
        mock_storage.return_value.get_state.return_value = {
            "_current_state": "unknown_state"
        }
        assert states_class.get_current(123) is None

    def test_reset_deletes_state(self, states_class, mock_storage):
        states_class.reset(123)
        mock_storage.return_value.delete_state.assert_called_once_with(123)

    def test_is_current_true_when_matches(self, states_class, mock_storage):
        mock_storage.return_value.get_state.return_value = {
            "_current_state": "TestStates.state1"
        }
        assert states_class.is_current(states_class.state1, 123) is True

    def test_is_current_false_when_different(self, states_class, mock_storage):
        mock_storage.return_value.get_state.return_value = {
            "_current_state": "TestStates.state2"
        }
        assert states_class.is_current(states_class.state1, 123) is False

    def test_is_current_false_when_no_state(self, states_class, mock_storage):
        mock_storage.return_value.get_state.return_value = None
        assert states_class.is_current(states_class.state1, 123) is False

    def test_received_alias_for_is_current(self, states_class, mock_storage):
        mock_storage.return_value.get_state.return_value = {
            "_current_state": "TestStates.state1"
        }
        assert states_class.received(states_class.state1, 123) is True
        assert states_class.received(states_class.state2, 123) is False

    def test_set_attribute(self, states_class, mock_storage):
        states_class.set_attribute(123, "test_attr", "test_value")
        mock_storage.return_value.set_attribute.assert_called_once_with(
            123, "test_attr", "test_value"
        )

    def test_get_attribute(self, states_class, mock_storage):
        mock_storage.return_value.get_attribute.return_value = "test_value"
        result = states_class.get_attribute(123, "test_attr", "default")
        assert result == "test_value"
        mock_storage.return_value.get_attribute.assert_called_once_with(
            123, "test_attr", "default"
        )

    def test_get_attribute_with_default(self, states_class, mock_storage):
        def get_attribute_side_effect(chat_id, name, default):
            return default

        mock_storage.return_value.get_attribute.side_effect = get_attribute_side_effect

        result = states_class.get_attribute(123, "test_attr", "default")
        assert result == "default"
