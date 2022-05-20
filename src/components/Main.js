import React from 'react';
import List from './List';
import CustomList from './CustomList';
import Side from './Side';

function Main() {
    return (
        <div className='container-grid'>
            <div className='main-board-grid'>
                <List />
                <List />
                <List />
                <CustomList />
            </div>
            <div className='sidebar'>
                <Side />
                <Side />
                <Side />
            </div>
        </div>
    )
}

export default Main