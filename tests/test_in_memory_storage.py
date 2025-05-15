import pytest
from surfgram.core.fsm import InMemoryStorage


class TestInMemoryStorage:
    @pytest.fixture
    def storage(self):
        return InMemoryStorage()

    def test_initial_state_empty(self, storage):
        assert storage._storage == {}

    def test_get_state_nonexistent(self, storage):
        assert storage.get_state(123) is None

    def test_set_state(self, storage):
        test_data = {"key": "value"}
        storage.set_state(123, test_data)
        assert storage.get_state(123) == test_data

    def test_delete_state(self, storage):
        storage.set_state(123, {"key": "value"})
        storage.delete_state(123)
        assert storage.get_state(123) is None

    def test_delete_nonexistent_state(self, storage):
        storage.delete_state(123)  # Should not raise
        assert storage.get_state(123) is None

    def test_get_attribute_existing(self, storage):
        storage.set_state(123, {"name": "Alice"})
        assert storage.get_attribute(123, "name") == "Alice"

    def test_get_attribute_nonexistent(self, storage):
        storage.set_state(123, {"name": "Alice"})
        assert storage.get_attribute(123, "age") is None

    def test_get_attribute_default_value(self, storage):
        assert storage.get_attribute(123, "name", "Unknown") == "Unknown"
        storage.set_state(123, {"name": "Alice"})
        assert storage.get_attribute(123, "age", 30) == 30

    def test_set_attribute_new(self, storage):
        storage.set_attribute(123, "name", "Alice")
        assert storage.get_state(123) == {"name": "Alice"}

    def test_set_attribute_existing(self, storage):
        storage.set_state(123, {"name": "Alice"})
        storage.set_attribute(123, "name", "Bob")
        assert storage.get_state(123) == {"name": "Bob"}

    def test_set_attribute_multiple(self, storage):
        storage.set_attribute(123, "name", "Alice")
        storage.set_attribute(123, "age", 30)
        assert storage.get_state(123) == {"name": "Alice", "age": 30}

    def test_state_isolation(self, storage):
        storage.set_state(123, {"name": "Alice"})
        storage.set_state(456, {"name": "Bob"})
        assert storage.get_state(123) == {"name": "Alice"}
        assert storage.get_state(456) == {"name": "Bob"}
        storage.delete_state(123)
        assert storage.get_state(123) is None
        assert storage.get_state(456) == {"name": "Bob"}
