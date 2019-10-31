import React, { Component } from 'react';
import addCardAction from '../actions/addCardAction';
import { connect } from 'react-redux';
import AddCard from '../components/AddCard';

class AddCardPage extends Component {
    constructor() {
        super();
        this.onClick = this.onClickAdd.bind(this);
    }

    onClickAdd() {
        const {dispatch} = this.props;
        dispatch(addCardAction.pushCard());
    }

    render() {
        return(
            <AddCard onClick={this.onClick} />
        );
    }
}

export default connect()(AddCardPage);