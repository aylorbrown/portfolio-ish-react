import React from 'react'; 

// destructuring version 
export default function Header({title}) {
    return(
    <header>
        {/* what is on left hand side of tag in App */}
        <h1>{title}</h1>
    </header> 
    );
}

