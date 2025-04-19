from typing import Any, Dict, Optional, Type
from abc import ABCMeta
from surfgram.types import TypesFactory


class InlineQueryResultArticleMeta(ABCMeta):
    """Metaclass for InlineQueryResultArticle classes."""

    def __new__(cls, name: str, bases: tuple, attrs: Dict[str, Any]):
        new_class = super().__new__(cls, name, bases, attrs)
        if bases and new_class.__is_active__:
            InlineQueryResultArticlesFactory.register_inline_query_result_article(
                new_class
            )
        return new_class


class InlineQueryResultArticlesFactory(TypesFactory):
    """Factory for creating InlineQueryResultArticle instances."""

    INLINEQUERYRESULTARTICLES_REGISTRY: Dict[str, Type] = {}
    __type_name__ = "inline_query_result_article"

    @classmethod
    def register_inline_query_result_article(
        cls, inline_query_result_article_cls: Type
    ) -> None:
        """Register a new inline_query_result_article handler."""
        instance = inline_query_result_article_cls()
        for name in instance.__names__:
            cls.INLINEQUERYRESULTARTICLES_REGISTRY[name] = (
                inline_query_result_article_cls
            )

    @classmethod
    async def create(cls, update: Any) -> Optional[Any]:
        """Create handler instance from update."""
        obj = update.inline_query_result_article
        trigger_value = obj.title
        return cls.INLINEQUERYRESULTARTICLES_REGISTRY.get(trigger_value)()
