import React from 'react';
import { Categories } from './Categories';

const styles = {
    block: {
        borderRight: '2px solid #757575',
        height: 'calc(100vh - 60px)'
    }
}

const Sidebar = () => {
    return (
        <div style={styles.block}>
            <Categories />
        </div>
    )
}

export { Sidebar };