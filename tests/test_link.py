import pytest
from surfgram.core.helpers import Link


class TestLink:
    @pytest.mark.parametrize(
        "endpoint,expected_url",
        [
            ("/api", "https://core.telegram.org/bots/api"),
            ("/getMe", "https://core.telegram.org/bots/getMe"),
            ("/sendMessage", "https://core.telegram.org/bots/sendMessage"),
            (
                "/some/long/endpoint",
                "https://core.telegram.org/bots/some/long/endpoint",
            ),
        ],
    )
    def test_link_creation(self, endpoint, expected_url):
        link = Link(endpoint)
        assert str(link) == expected_url
        assert link.is_valid() is True
        assert link.endpoint == endpoint

    def test_base_url_class_attribute(self):
        assert Link.BASE_URL == "https://core.telegram.org/bots"
