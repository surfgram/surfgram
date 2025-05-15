import pytest
from surfgram.types.game import Game
from surfgram.types.game.factory import GamesFactory


class TestGame:
    """Tests for Game base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            Game()

    @pytest.fixture
    def concrete_game(self):
        """Concrete Game implementation for testing."""

        class ConcreteGame(Game):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteGame

    def test_concrete_instantiation(self, concrete_game):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_game()
        assert isinstance(instance, Game)


class TestGamesFactory:
    """Tests for GamesFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GamesFactory.GAMES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(Game):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        GamesFactory.register_game(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.game = mocker.MagicMock()
        mock_update.game.title = "test_trigger"

        result = await GamesFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.game = mocker.MagicMock()
        mock_update.game.title = "unknown_trigger"

        assert await GamesFactory.create(mock_update) is None
