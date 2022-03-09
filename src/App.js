import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleInputChange = ({ target }) => { // Ajuda do Matheus Vital
    const { value, name, type, checked } = target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    }, this.handleSaveButton);
  }

  handleSaveButton = () => {
    const { cardName, cardDescription, cardImage,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const at1 = Number(cardAttr1);
    const at2 = Number(cardAttr2);
    const at3 = Number(cardAttr3);
    const maxSum = 210;
    const max = 90;
    const min = 0;
    const allTexts = [cardName, cardDescription, cardImage];
    const AllTextsValidation = allTexts.some(((text) => text.length === 0));    
    let sumValidation = false;
    if ((at1 + at2 + at3) > maxSum) sumValidation = true;
    let overNinety = false;
    if (at1 > max || at2 > max || at3 > max) overNinety = true;
    let underZero = false;
    if (at1 < min || at2 < min || at3 < min) underZero = true;
    const validations = [AllTextsValidation, sumValidation, overNinety, underZero];
    const disabled = validations.some((validation) => validation === true);
    this.setState({
      isSaveButtonDisabled: disabled,
    });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <p> arroz </p>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
