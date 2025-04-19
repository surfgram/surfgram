from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class StoryAreaTypeWeatherMeta(ABCMeta):
    """Metaclass for StoryAreaTypeWeather classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            StoryAreaTypeWeathersFactory.register_story_area_type_weather(new_class)
        return new_class


class StoryAreaTypeWeathersFactory(TypesFactory):
    """Factory for creating StoryAreaTypeWeather instances."""

    STORYAREATYPEWEATHERS_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "story_area_type_weather"

    @classmethod
    def register_story_area_type_weather(
        cls, story_area_type_weather_cls: Type
    ) -> None:
        """Register a new story_area_type_weather handler."""
        instance = story_area_type_weather_cls()
        for name in instance.__names__:
            cls.STORYAREATYPEWEATHERS_REGISTRY[name] = story_area_type_weather_cls

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.story_area_type_weather
        trigger_value = obj.type
        return cls.STORYAREATYPEWEATHERS_REGISTRY.get(trigger_value)()
