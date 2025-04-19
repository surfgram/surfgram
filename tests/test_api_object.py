import pytest

from surfgram import APIObject


class TestAPIObject:

    def test_initialization(self):
        """Tests if APIObject initializes correctly with data."""
        data = {"key1": "value1", "key2": {"nested_key": "nested_value"}}
        api_object = APIObject(data)
        assert api_object._data == data

    def test_dynamic_attribute_access(self):
        """Tests dynamic attribute access of APIObject."""
        data = {"key1": "value1", "key2": "value2"}
        api_object = APIObject(data)

        assert api_object.key1 == "value1"
        assert api_object.key2 == "value2"

    def test_nested_object_access(self):
        """Tests access to nested objects."""
        data = {"key1": {"nested_key": "nested_value"}}
        api_object = APIObject(data)

        nested_obj = api_object.key1
        assert isinstance(nested_obj, APIObject)
        assert nested_obj.nested_key == "nested_value"

    def test_access_non_existent_attribute(self):
        """Tests error handling for non-existent attribute access."""
        data = {"key1": "value1"}
        api_object = APIObject(data)

        with pytest.raises(AttributeError) as excinfo:
            _ = api_object.non_existent_key

        assert (
            str(excinfo.value)
            == "'APIObject' object has no attribute 'non_existent_key'. Did you mean: ''?"
        )

    def test_access_non_existent_attribute_with_suggestion(self):
        """Tests error handling with suggestions for non-existent attributes."""
        data = {"key1": "value1"}
        api_object = APIObject(data)

        with pytest.raises(AttributeError) as excinfo:
            _ = api_object.key

        # Test if suggestions include 'key1'
        assert "Did you mean: 'key1'?" in str(excinfo.value)

    def test_representation(self):
        """Tests the representation of the APIObject."""
        data = {"key1": "value1", "key2": "value2"}
        api_object = APIObject(data)
        assert repr(api_object) == "APIObject({'key1': 'value1', 'key2': 'value2'})"
