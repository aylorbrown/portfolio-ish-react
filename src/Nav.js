import React from 'react';
import { Link } from 'react-router-dom';

// declares that the component is a kind of react component so 
// let me inherit all that good stuff
export default class Nav extends React.Component {
    constructor(props){
        // register Nav as one of the React Components on the page
        super(props);
        // replaces JS global variables
        this.state = {
            isOpen: false
        }
    }
    render() {
        return (
            // if/else with a return
            this.state.isOpen ? 
            <div>
                <a onClick={this._toggleMenu}>🥞</a>
                <ul>
                        {
                            this.props.links.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
            </div>
                :
                <a onClick={this._toggleMenu}>🍔</a>
        );
    }

    // helper method/function 
    // arrow function variable never ever lose the value of 'this' keyword
    _toggleMenu = () => {
        // you can't manipulate state directly! react won't know to redraw 
        this.setState({
            isOpen: !this.state.isOpen
        }, () => {
            console.log('menu toggled!');
        });
    }
}


// you need a class when there is user interactivity or AJAX!!