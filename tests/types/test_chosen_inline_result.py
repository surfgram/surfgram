import pytest
from surfgram.types.chosen_inline_result import ChosenInlineResult
from surfgram.types.chosen_inline_result.factory import ChosenInlineResultsFactory


class TestChosenInlineResult:
    """Tests for ChosenInlineResult base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ChosenInlineResult()

    @pytest.fixture
    def concrete_chosen_inline_result(self):
        """Concrete ChosenInlineResult implementation for testing."""

        class ConcreteChosenInlineResult(ChosenInlineResult):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteChosenInlineResult

    def test_concrete_instantiation(self, concrete_chosen_inline_result):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_chosen_inline_result()
        assert isinstance(instance, ChosenInlineResult)


class TestChosenInlineResultsFactory:
    """Tests for ChosenInlineResultsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ChosenInlineResultsFactory.CHOSENINLINERESULTS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ChosenInlineResult):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ChosenInlineResultsFactory.register_chosen_inline_result(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.chosen_inline_result = mocker.MagicMock()
        mock_update.chosen_inline_result.result_id = "test_trigger"

        result = await ChosenInlineResultsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.chosen_inline_result = mocker.MagicMock()
        mock_update.chosen_inline_result.result_id = "unknown_trigger"

        assert await ChosenInlineResultsFactory.create(mock_update) is None
