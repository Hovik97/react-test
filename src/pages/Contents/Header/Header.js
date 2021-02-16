import React from 'react';
import { LeftBlock } from './LeftBlock';
import { RightBlock } from './RightBlock';

const styles = {
    header: {
        height: '60px',
        borderBottom: '2px solid #757575',
        padding: '10px',
        position: 'fixed',
        width: '100%',
        zIndex: '1',
        backgroundColor: 'black'
    }
}

const Header = () => {
    return (
        <header
            style={styles.header}
            className='d-flex align-items-center justify-content-between'
        >
            <LeftBlock />
            <RightBlock />
        </header>
    )
}

export { Header };