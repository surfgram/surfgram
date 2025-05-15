import pytest
from surfgram.types.response_parameters import ResponseParameters
from surfgram.types.response_parameters.factory import ResponseParametersFactory


class TestResponseParameters:
    """Tests for ResponseParameters base class."""

    def test_abstract_instantiation_fails(self):
        """Should raise TypeError when instantiated directly."""
        with pytest.raises(TypeError):
            ResponseParameters()

    @pytest.fixture
    def concrete_response_parameters(self):
        """Concrete ResponseParameters implementation for testing."""

        class ConcreteResponseParameters(ResponseParameters):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        return ConcreteResponseParameters

    def test_concrete_instantiation(self, concrete_response_parameters):
        """Should allow instantiation of concrete subclasses."""
        instance = concrete_response_parameters()
        assert isinstance(instance, ResponseParameters)


class TestResponseParametersFactory:
    """Tests for ResponseParametersFactory factory class."""

    @pytest.fixture(autouse=True)
    def reset_factory(self):
        """Ensure clean state for each test."""
        ResponseParametersFactory.RESPONSEPARAMETERS_REGISTRY.clear()

    @pytest.fixture
    def registered_handler(self):
        """Register and return a test handler."""

        class TestHandler(ResponseParameters):
            __names__ = ["test_trigger"]

            async def __callback__(self):
                return None

        ResponseParametersFactory.register_response_parameters(TestHandler)
        return TestHandler

    @pytest.mark.asyncio
    async def test_create_with_valid_trigger(self, registered_handler, mocker):
        """Should return handler instance when trigger matches."""
        mock_update = mocker.MagicMock()
        mock_update.response_parameters = mocker.MagicMock()
        mock_update.response_parameters.migrate_to_chat_id = "test_trigger"

        result = await ResponseParametersFactory.create(mock_update)
        assert isinstance(result, registered_handler)

    @pytest.mark.asyncio
    async def test_create_with_invalid_trigger(self, mocker):
        """Should return None when no handler matches."""
        mock_update = mocker.MagicMock()
        mock_update.response_parameters = mocker.MagicMock()
        mock_update.response_parameters.migrate_to_chat_id = "unknown_trigger"

        assert await ResponseParametersFactory.create(mock_update) is None
