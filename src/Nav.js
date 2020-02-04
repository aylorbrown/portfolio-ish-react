import React from 'react';

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
                <ul onClick={this._toggleMenu}>
                    {/* {
                    links.map((item, index) => {
                        return<li>{item}</li>
                    })
                    } */}
    
                    <li>{this.props.links[0]}</li>
                    <li>{this.props.links[1]}</li>
                    <li>{this.props.links[2]}</li>
    
                </ul>
                :
                <a onClick={this._toggleMenu}>🍔</a>
        );
    }

    // helper method/function 
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