from typing import Dict, Any, Optional
from . import BaseStorage


class InMemoryStorage(BaseStorage):
    """In-memory storage provider using a dictionary."""

    def __init__(self):
        self._storage: Dict[int, Dict[str, Any]] = {}

    def get_state(self, chat_id: int) -> Optional[Dict[str, Any]]:
        return self._storage.get(chat_id)

    def set_state(self, chat_id: int, state_data: Dict[str, Any]) -> None:
        self._storage[chat_id] = state_data

    def delete_state(self, chat_id: int) -> None:
        self._storage.pop(chat_id, None)

    def get_attribute(self, chat_id: int, name: str, default: Any = None) -> Any:
        state = self.get_state(chat_id)
        if state is None:
            return default
        return state.get(name, default)

    def set_attribute(self, chat_id: int, name: str, value: Any) -> None:
        state = self.get_state(chat_id)
        if state is None:
            state = {}
            self._storage[chat_id] = state
        state[name] = value
