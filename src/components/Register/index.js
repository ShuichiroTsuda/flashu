import React, { Component } from 'react';
import { firebaseDb } from '../../firebase';
import 'bulma/css/bulma.css';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: '',
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        firebaseDb.ref(`cards`).push({
            question: this.state.question,
            answer: this.state.answer,
        });
        this.setState({ question: '', answer: ''});
    }

    render() {
        const { question, answer } = this.state;

        return(
            <div className="container">
                <div className="field">
                    <label className="label">Question</label>
                    <input
                        className="input"
                        value={this.state.question}
                        onChange={ e => this.setState({ question: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label className="label">Answer</label>
                    <input
                        className="input"
                        value={this.state.answer}
                        onChange={e => this.setState({ answer: e.target.value })}
                    />
                <div className="control">
                    {question && 
                     answer && (
                         <button className="button is-link" onClick={this.onClick}>
                             Submit
                         </button>
                     )}
                </div>
                </div>
            </div>
        );
    }
}