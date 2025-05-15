import pytest
from surfgram.core.fsm import RedisStorage
import redis


class TestRedisStorage:
    @pytest.fixture
    def redis_storage(self, mocker):
        mock_redis = mocker.MagicMock(spec=redis.Redis)
        mocker.patch("redis.Redis", return_value=mock_redis)
        storage = RedisStorage(host="testhost", port=1234, db=1, prefix="test:")
        storage._redis = mock_redis
        return storage, mock_redis

    def test_initialization(self, mocker):
        mock_redis = mocker.MagicMock()
        mocker.patch("redis.Redis", return_value=mock_redis)

        storage = RedisStorage(host="testhost", port=1234, db=1, prefix="test:")

        assert storage._prefix == "test:"
        redis.Redis.assert_called_once_with(host="testhost", port=1234, db=1)

    def test_get_key(self, redis_storage):
        storage, _ = redis_storage
        assert storage._get_key(123) == "test:123"

    def test_get_state_empty(self, redis_storage):
        storage, mock_redis = redis_storage
        mock_redis.hgetall.return_value = {}

        assert storage.get_state(123) is None
        mock_redis.hgetall.assert_called_once_with("test:123")

    def test_get_state_with_data(self, redis_storage):
        storage, mock_redis = redis_storage
        mock_data = {b"key1": b"value1", b"key2": b"value2"}
        mock_redis.hgetall.return_value = mock_data

        result = storage.get_state(123)
        assert result == {"key1": "value1", "key2": "value2"}
        mock_redis.hgetall.assert_called_once_with("test:123")

    def test_set_state(self, redis_storage):
        storage, mock_redis = redis_storage
        test_data = {"key1": "value1", "key2": "value2"}

        storage.set_state(123, test_data)
        mock_redis.hset.assert_called_once_with("test:123", mapping=test_data)

    def test_delete_state(self, redis_storage):
        storage, mock_redis = redis_storage
        storage.delete_state(123)
        mock_redis.delete.assert_called_once_with("test:123")

    def test_get_attribute_existing(self, redis_storage):
        storage, mock_redis = redis_storage
        mock_redis.hget.return_value = b"test_value"

        result = storage.get_attribute(123, "test_key")
        assert result == "test_value"
        mock_redis.hget.assert_called_once_with("test:123", "test_key")

    def test_get_attribute_missing(self, redis_storage):
        storage, mock_redis = redis_storage
        mock_redis.hget.return_value = None

        result = storage.get_attribute(123, "test_key")
        assert result is None
        mock_redis.hget.assert_called_once_with("test:123", "test_key")

    def test_get_attribute_with_default(self, redis_storage):
        storage, mock_redis = redis_storage
        mock_redis.hget.return_value = None

        result = storage.get_attribute(123, "test_key", "default")
        assert result == "default"
        mock_redis.hget.assert_called_once_with("test:123", "test_key")

    def test_set_attribute(self, redis_storage):
        storage, mock_redis = redis_storage
        storage.set_attribute(123, "test_key", "test_value")
        mock_redis.hset.assert_called_once_with("test:123", "test_key", "test_value")

    def test_set_attribute_numeric_value(self, redis_storage):
        storage, mock_redis = redis_storage
        storage.set_attribute(123, "test_key", 42)
        mock_redis.hset.assert_called_once_with("test:123", "test_key", "42")

    def test_connection_parameters(self, mocker):
        mock_redis = mocker.MagicMock()
        mocker.patch("redis.Redis", return_value=mock_redis)

        RedisStorage(host="myhost", port=6380, db=2)
        redis.Redis.assert_called_once_with(host="myhost", port=6380, db=2)
