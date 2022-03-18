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
      deck: [],
      filteredDeck: [],
      trunfo: false,
      searchName: '',
      searchRare: 'todas',
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
    const card = this.state;
    const trunfoExist = card.filteredDeck.some((trunfoCard) => trunfoCard.cardTrunfo);
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
      trunfo: trunfoExist,
    });
  }

  saveForm = (event) => {
    const card = this.state;
    this.setState((prevState) => ({
      deck: [...prevState.deck, card],
      filteredDeck: [...prevState.filteredDeck, card],
    }), this.resetStatesDefault);
    event.preventDefault();
  }

  handleDeleteButton = (event) => {
    const indexCard = Number(event.target.id);
    const { filteredDeck } = this.state;
    const cards = filteredDeck.filter((_card, index) => index !== indexCard);
    this.setState({
      filteredDeck: cards,
    }, this.resetStatesDefault);
  }

  filterSearch = () => {
    const { deck, searchName, searchRare } = this.state;
    let filteredDeck = [];
    if (searchRare === 'todas') {
      filteredDeck = deck.filter((card) => card.cardName.includes(searchName));
    } else {
      filteredDeck = deck.filter((card) => card.cardName.includes(searchName)
     && card.cardRare === searchRare);
    }
    this.setState({
      filteredDeck: [...filteredDeck],
    });
  }

  handleSearchChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.filterSearch);
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, searchName, searchRare,
      isSaveButtonDisabled, trunfo, filteredDeck } = this.state;
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
          searchName={ searchName }
          searchRare={ searchRare }
          onSearchChange={ this.handleSearchChange }
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
          isPreviewCard
          // deleteCard={ this.handleDeleteButton }
          // id={ 0 }
        />
        <div>
          { filteredDeck.map((savedCard, index) => (
            <div key={ index }>
              <Card
                cardName={ savedCard.cardName }
                cardDescription={ savedCard.cardDescription }
                cardAttr1={ savedCard.cardAttr1 }
                cardAttr2={ savedCard.cardAttr2 }
                cardAttr3={ savedCard.cardAttr3 }
                cardImage={ savedCard.cardImage }
                cardRare={ savedCard.cardRare }
                cardTrunfo={ savedCard.cardTrunfo }
                isPreviewCard={ false }
                deleteCard={ this.handleDeleteButton }
                id={ index }
              />
            </div>
          )) }
        </div>
      </div>
    );
  }
}

export default App;
