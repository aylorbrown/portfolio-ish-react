import React from 'react'; 

export default function Header(props) {
    return(
    <header>
        <h1>{props.content}</h1>
    </header> 
    );
}

