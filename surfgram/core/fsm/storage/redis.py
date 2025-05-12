from typing import Dict, Any, Optional, Type
import redis
from . import BaseStorage


class RedisStorage(BaseStorage):
    """Redis storage provider."""

    def __init__(
        self,
        host: str = "localhost",
        port: int = 6379,
        db: int = 0,
        prefix: str = "state:",
    ):
        self._redis = redis.Redis(host=host, port=port, db=db)
        self._prefix = prefix

    def _get_key(self, chat_id: int) -> str:
        return f"{self._prefix}{chat_id}"

    def get_state(self, chat_id: int) -> Optional[Dict[str, Any]]:
        key = self._get_key(chat_id)
        data = self._redis.hgetall(key)
        return (
            {k.decode("utf-8"): v.decode("utf-8") for k, v in data.items()}
            if data
            else None
        )

    def set_state(self, chat_id: int, state_data: Dict[str, Any]) -> None:
        key = self._get_key(chat_id)
        self._redis.hset(key, mapping=state_data)

    def delete_state(self, chat_id: int) -> None:
        key = self._get_key(chat_id)
        self._redis.delete(key)

    def get_attribute(self, chat_id: int, name: str, default: Any = None) -> Any:
        key = self._get_key(chat_id)
        value = self._redis.hget(key, name)
        return value.decode("utf-8") if value is not None else default

    def set_attribute(self, chat_id: int, name: str, value: Any) -> None:
        key = self._get_key(chat_id)
        self._redis.hset(key, name, str(value))
