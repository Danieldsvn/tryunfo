import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    const noTrunfo = (
      <label htmlFor="super-trunfo">
        É super Super Trunfo?
        <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          id="super-trunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
    return (
      <form>
        <label htmlFor="card-name">
          Nome da carta
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            id="card-name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr1">
          Atributo 1
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            id="card-attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr2">
          Atributo 2
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            id="card-attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-attr3">
          Atributo 3
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            id="card-attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card-image">
          Link para imagem da carta
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            id="card-image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="how-rare">
          Raridade
          <select
            name="cardRare"
            data-testid="rare-input"
            id="how-rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : noTrunfo }
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
