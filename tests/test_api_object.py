import pytest
from surfgram.core.structures import APIObject


class TestAPIObject:
    def test_init_with_dict(self):
        data = {"key1": "value1", "key2": {"nested": "value"}}
        obj = APIObject(data)
        assert obj._data == data

    def test_getattr_existing_key(self):
        data = {"name": "test", "value": 42}
        obj = APIObject(data)
        assert obj.name == "test"
        assert obj.value == 42

    def test_getattr_nested_dict(self):
        data = {"user": {"name": "Alice", "age": 30}}
        obj = APIObject(data)
        assert isinstance(obj.user, APIObject)
        assert obj.user.name == "Alice"
        assert obj.user.age == 30

    def test_getattr_non_existing_key(self):
        """Test accessing non-existing attribute"""
        data = {"valid_key": "value"}
        obj = APIObject(data)

        with pytest.raises(AttributeError) as excinfo:
            _ = obj.invalid_key

        assert "invalid_key" in str(excinfo.value)
        assert "Did you mean" in str(excinfo.value)

    def test_getattr_with_similar_suggestion(self):
        data = {"username": "test", "user_name": "test2"}
        obj = APIObject(data)

        with pytest.raises(AttributeError) as excinfo:
            _ = obj.usernme

        assert "usernme" in str(excinfo.value)
        assert "username" in str(excinfo.value) or "user_name" in str(excinfo.value)

    def test_repr(self):
        data = {"a": 1, "b": 2}
        obj = APIObject(data)
        assert repr(obj) == f"APIObject({data})"
