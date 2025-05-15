import pytest
from surfgram.types.copy_text_button import CopyTextButton
from surfgram.types.copy_text_button.factory import CopyTextButtonsFactory


class TestCopyTextButton:
    """Tests for CopyTextButton base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            CopyTextButton()

    @pytest.fixture
    def concrete_copy_text_button(self):
        """Concrete CopyTextButton implementation for testing."""

        class ConcreteCopyTextButton(CopyTextButton):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteCopyTextButton

    def test_concrete_instantiation(self, concrete_copy_text_button):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_copy_text_button()
        assert isinstance(instance, CopyTextButton)


class TestCopyTextButtonsFactory:
    """Tests for CopyTextButtonsFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        CopyTextButtonsFactory.COPYTEXTBUTTONS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(CopyTextButton):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        CopyTextButtonsFactory.register_copy_text_button(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.copy_text_button = mocker.MagicMock()
        mock_update.copy_text_button.text = "test_trigger"

        result = await CopyTextButtonsFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.copy_text_button = mocker.MagicMock()
        mock_update.copy_text_button.text = "unknown_trigger"

        assert await CopyTextButtonsFactory.create(mock_update) is None
