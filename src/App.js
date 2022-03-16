import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      trunfo: false,
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

  resetStatesDefault = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  saveForm = (event) => {
    const card = this.state
    const trunfoExist = card.savedCards.some((trunfoCard) => trunfoCard.cardTrunfo);
    this.setState((prevState) => ({
      savedCards: [...prevState.savedCards, card],
      trunfo: trunfoExist,
    }), this.resetStatesDefault);
    event.preventDefault();    
  }

 

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled, trunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
          onSaveButtonClick={ this.saveForm }
          hasTrunfo={ trunfo }
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
