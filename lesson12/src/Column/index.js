import React, { Component, PropTypes } from 'react';
import Heading from '../Heading';
import Card from '../Card';
import './styles.css';

class Column extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
  };

  state = {
    cards: [],
    name: '',
  };

  componentDidMount() {
    const cards = [];

    for (let i=0; i<10; i+=1) {
      cards.push({
        id: `id_${i}`,
        name: `Card name ${i}`,
        color: i % 2 === 0 ? 'green' : 'red',
      });
    }

    this.setState(() => ({
      cards,
    }));
  }

  cardClicked = clicked_id => this.setState(
    state => ({
      cards: state.cards.filter(({ id }) => id !== clicked_id),
    }),
  );

  addCard = () => {
    const name = document.getElementById(`name_${this.props.children}`).value;
    const color = document.getElementById(`color_${this.props.children}`).value;

    if (!name || !color) {
      return;
    }

    this.setState(state => ({
      cards: [
        ...state.cards, 
        {
          id: Math.random(),
          name,
          color,
        },
      ],
    }));
  }

  render() {
    return (
      <div className="column">
        <Heading className="listHeading">
          {this.props.children}
        </Heading>
        {
          this.state.cards.map(card =>
          <Card
            color={card.color}
            id={card.id}
            onClick={this.cardClicked}
            key={`${this.props.children}_${card.id}`}
          >
            {card.name}
          </Card>)
        }
        <div className="addCard">
          <label htmlFor={`name_${this.props.children}`}>
            Write name:
          </label>
          <input
            id={`name_${this.props.children}`}
            type="text"
          />
          <label htmlFor={`color_${this.props.children}`}>
            Color:
          </label>
          <input
            id={`color_${this.props.children}`}
            type="text"
          />
          <button onClick={this.addCard}>
            Add card
          </button>
        </div>
      </div>
    );
  }  
}

export default Column;
