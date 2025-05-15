import pytest
from surfgram.types.game_high_score import GameHighScore
from surfgram.types.game_high_score.factory import GameHighScoresFactory


class TestGameHighScore:
    """Tests for GameHighScore base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            GameHighScore()

    @pytest.fixture
    def concrete_game_high_score(self):
        """Concrete GameHighScore implementation for testing."""

        class ConcreteGameHighScore(GameHighScore):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteGameHighScore

    def test_concrete_instantiation(self, concrete_game_high_score):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_game_high_score()
        assert isinstance(instance, GameHighScore)


class TestGameHighScoresFactory:
    """Tests for GameHighScoresFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        GameHighScoresFactory.GAMEHIGHSCORES_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(GameHighScore):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        GameHighScoresFactory.register_game_high_score(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.game_high_score = mocker.MagicMock()
        mock_update.game_high_score.position = "test_trigger"

        result = await GameHighScoresFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.game_high_score = mocker.MagicMock()
        mock_update.game_high_score.position = "unknown_trigger"

        assert await GameHighScoresFactory.create(mock_update) is None
