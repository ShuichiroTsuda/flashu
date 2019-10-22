import React, { Component } from 'react';
import { firebaseDb } from '../../firebase';
import 'bulma/css/bulma.css';


export default class FlashCard extends Component {
    constructor() {
        super();
        this.state = {
            cards: [],
            isCardFront: true,
            cardNumber: 1,
            sizeOfCards: 0,
            loading: true,
        };
        this.turnOverCard = this.turnOverCard.bind(this);
        this.previousCard = this.previousCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
    }

    turnOverCard() {
        this.setState(state => ({
            isCardFront: !state.isCardFront
        }));
    }

    previousCard() {
        this.setState({
            isCardFront: true,
        });
        if(this.state.cardNumber > 1) {
            this.setState({ cardNumber: this.state.cardNumber - 1})
        } else if(this.state.cardNumber === 1) {
            this.setState({ cardNumber: this.state.sizeOfCards})
        } else {
            console.log("cardNumber error");
        }
    }

    nextCard() {
        this.setState({
            isCardFront: true,
        });
        if(this.state.cardNumber < this.state.sizeOfCards) {
            this.setState({ cardNumber: this.state.cardNumber + 1})
        } else if(this.state.cardNumber === this.state.sizeOfCards){
            this.setState({ cardNumber: 1})
        } else {
            console.log("cardNumber error");
        }
    }  

    componentDidMount() {
        firebaseDb
            .ref(`cards`)
            .on('value', snapshot => this.setState({
                cards: Object.values(snapshot.val()) || [],
                sizeOfCards: snapshot.numChildren() || [],
                loading: false,
            }));
    }

    
    render() {
        

        return(
            <div className="card-panel">
                <p>{this.state.cardNumber}/{this.state.sizeOfCards}</p>
                <button
                    className="turn-over-card"
                    onClick={this.turnOverCard}
                >
                    {this.state.isCardFront ? 'Answer' : 'Question'}
                </button>

                <button
                    className="previous-card"
                    onClick={this.previousCard}
                >
                    Previous
                </button>

                <button
                    className="next-card"
                    onClick={this.nextCard}
                >
                    Next
                </button>

                <div className="card">
                    <div className="content">
                        <p>
                            {!this.state.loading ? 
                                (this.state.isCardFront ?
                                this.state.cards[this.state.cardNumber - 1].question :
                                this.state.cards[this.state.cardNumber - 1].answer)
                            : "Loading" }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}