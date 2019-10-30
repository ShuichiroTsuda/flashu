import React, { Component } from 'react';
import { connect } from 'react-redux';
import cardsAction from '../actions/cardsAction';
import FlashCard from '../components/FlashCard';

class Card extends Component {
    constructor(){
        super();
        this.turnOverCard = this.turnOverCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(cardsAction.loadCards());
    }

    turnOverCard() {
        const {dispatch} = this.props;
        dispatch(cardsAction.turnOverCard());
    }

    previousCard() {
        const {dispatch} = this.props;
        dispatch(cardsAction.previousCard());
    }

    nextCard() {
        const {dispatch} = this.props;
        dispatch(cardsAction.nextCard());
    }
    render(){
        const {card} = this.props
        console.log(this.props.cardNum);
        console.log("props: " + this.props);
        return(
        <FlashCard 
            {...card} 
            turnOverCard={this.turnOverCard}
            previousCard={this.previousCard}
            nextCard={this.nextCard}
        />
        );
    }
}
/*
const mapStateToProps = (state) => {
    console.log(state.card.card);
    return {
      card: state.card.card
    };
};
*/

const mapStateToProps = (state) => state.card;

export default connect(mapStateToProps)(Card);