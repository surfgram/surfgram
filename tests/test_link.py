import pytest

from surfgram.core.helpers import Link


class TestLink:

    def test_link_initialization_valid(self):
        """Test that the Link can be initialized with a valid endpoint."""
        link = Link("/some_endpoint")
        assert link.endpoint == "/some_endpoint"

    def test_link_initialization_empty_endpoint(self):
        """Test that the Link can be initialized with an empty endpoint."""
        link = Link("")
        assert link.endpoint == ""

    def test_str_method_valid_link(self):
        """Test the __str__ method returns the correct URL for a valid endpoint."""
        link = Link("/some_endpoint")
        expected_link = "https://core.telegram.org/bots/some_endpoint"
        assert str(link) == expected_link

    def test_str_method_invalid_link(self):
        """Test the __str__ method returns an empty string for an invalid endpoint."""
        link = Link("")  # Empty endpoint
        assert str(link) == ""

    def test_is_valid_method_when_endpoint_is_valid(self):
        """Test the is_valid method returns True for a valid endpoint."""
        link = Link("/some_endpoint")
        assert link.is_valid() is True

    def test_is_valid_method_when_endpoint_is_empty(self):
        """Test the is_valid method returns False for an empty endpoint."""
        link = Link("")
        assert link.is_valid() is False

    def test_is_valid_method_when_endpoint_is_none(self):
        """Test the is_valid method handles None endpoint correctly (if applicable)."""
        link = Link(None)  # Assuming we want to test None input
        assert link.is_valid() is False

    def test_str_method_with_different_endpoints(self):
        """Test the __str__ method with various valid and invalid endpoints."""
        valid_endpoints = ["/start", "/help", "/getUpdates"]
        for endpoint in valid_endpoints:
            link = Link(endpoint)
            assert str(link) == f"https://core.telegram.org/bots{endpoint}"

        invalid_endpoints = ["", None]
        for endpoint in invalid_endpoints:
            link = Link(endpoint)
            assert str(link) == ""
