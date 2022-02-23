import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="card-name">
          Nome da carta
          <input type="text" data-testid="name-input" id="card-name" />
        </label>
        <label htmlFor="description">
          Descrição
          <input type="textarea" data-testid="description-input" id="description" />
        </label>
        <label htmlFor="card-attr1">
          Atributo 1
          <input type="number" data-testid="attr1-input" id="card-attr1" />
        </label>
        <label htmlFor="card-attr2">
          Atributo 2
          <input type="number" data-testid="attr2-input" id="card-attr2" />
        </label>
        <label htmlFor="card-attr3">
          Atributo 3
          <input type="number" data-testid="attr3-input" id="card-attr3" />
        </label>
        <label htmlFor="card-image">
          Link para imagem da carta
          <input type="text" data-testid="image-input" id="card-image" />
        </label>
        <label htmlFor="how-rare">
          Raridade
          <select data-testid="rare-input" id="how-rare">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="super-trunfo">
          É super Super Trunfo?
          <input type="checkbox" data-testid="trunfo-input" id="super-trunfo" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
