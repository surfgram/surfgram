import pytest
from typing import Dict, Any
from surfgram import APIObject


@pytest.fixture
def sample_data() -> Dict[str, Any]:
    """Fixture providing test data for APIObject instances.

    Returns:
        Dict[str, Any]: Sample data structure with various value types
        including primitives, nested dicts, lists, and None values.
    """
    return {
        "name": "Test Object",
        "value": 42,
        "nested": {"key": "value", "number": 3.14},
        "list_data": [1, 2, 3],
        "none_value": None,
    }


@pytest.fixture
def api_obj(sample_data: Dict[str, Any]) -> APIObject:
    """Fixture providing initialized APIObject instance.

    Args:
        sample_data: Test data from sample_data fixture

    Returns:
        APIObject: Preconfigured APIObject instance for testing
    """
    return APIObject(sample_data)


class TestAPIObjectBasic:
    """Test core functionality of APIObject class."""

    def test_attribute_access(self, api_obj: APIObject):
        """Verify direct attribute access to top-level properties."""
        assert api_obj.name == "Test Object"
        assert api_obj.value == 42
        assert api_obj.none_value is None

    def test_nested_attribute_access(self, api_obj: APIObject):
        """Verify nested dictionary access through chained attributes."""
        assert api_obj.nested.key == "value"
        assert api_obj.nested.number == 3.14

    def test_missing_attribute_error(self, api_obj: APIObject):
        """Verify proper AttributeError when accessing nonexistent attributes."""
        with pytest.raises(AttributeError) as exc_info:
            _ = api_obj.non_existent

        assert "has no attribute 'non_existent'" in str(exc_info.value)

    def test_repr(self, api_obj: APIObject, sample_data: Dict[str, Any]):
        """Verify string representation contains original data."""
        assert repr(api_obj) == f"APIObject({sample_data!r})"


class TestAPIObjectEdgeCases:
    """Test edge cases and special values handling."""

    def test_empty_object(self):
        """Verify behavior with empty dictionary input."""
        empty_obj = APIObject({})
        with pytest.raises(AttributeError):
            _ = empty_obj.any_attribute

    def test_list_values(self, api_obj: APIObject):
        """Verify list values remain unchanged."""
        assert api_obj.list_data == [1, 2, 3]
        assert isinstance(api_obj.list_data, list)
        assert not isinstance(api_obj.list_data, APIObject)

    def test_none_values(self, api_obj: APIObject):
        """Verify None values are handled correctly."""
        assert api_obj.none_value is None


class TestAPISuggestions:
    """Test attribute suggestion system for misspelled names."""

    @pytest.mark.parametrize(
        "wrong_attr,expected_suggestion",
        [
            ("naem", "name"),
            ("valve", "value"),
            ("nsted", "nested"),
            ("listdate", "list_data"),
        ],
        ids=["name typo", "value typo", "nested typo", "list_data typo"],
    )
    def test_attribute_suggestions(
        self, api_obj: APIObject, wrong_attr: str, expected_suggestion: str
    ):
        """Parameterized test for various misspelling scenarios.

        Args:
            wrong_attr: Misspelled attribute name to test
            expected_suggestion: Correct name that should be suggested
        """
        with pytest.raises(AttributeError) as exc_info:
            _ = getattr(api_obj, wrong_attr)

        assert f"Did you mean '{expected_suggestion}'?" in str(exc_info.value)

    def test_no_suggestion_when_not_close_match(self, api_obj: APIObject):
        """Verify absence of suggestions for completely wrong names."""
        with pytest.raises(AttributeError) as exc_info:
            _ = api_obj.xyz123abc

        assert "Did you mean" not in str(exc_info.value)


class TestAPIObjectWrapping:
    """Test value wrapping behavior."""

    def test_dict_wrapping(self, api_obj: APIObject):
        """Verify dictionaries get wrapped in APIObject instances."""
        assert isinstance(api_obj.nested, APIObject)

    def test_non_dict_not_wrapped(self, api_obj: APIObject):
        """Verify non-dict values remain unchanged."""
        assert not isinstance(api_obj.name, APIObject)
        assert not isinstance(api_obj.value, APIObject)
        assert not isinstance(api_obj.list_data, APIObject)
        assert not isinstance(api_obj.none_value, APIObject)


def test_direct_dict_access(api_obj: APIObject, sample_data: Dict[str, Any]):
    """Verify original data remains accessible via _data attribute."""
    assert api_obj._data == sample_data
