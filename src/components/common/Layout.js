import React from 'react';

const Layout = (props) => {
    return (
        <>
            <h2>Adventurer Handbook</h2>
                {props.children}
            <h3>(c) 2022 sal / this is the footer</h3>
        </>
    )
}

export default Layout;