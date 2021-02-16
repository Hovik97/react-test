import React from 'react';
import { Logo } from './Logo';
import { CollapseIcon } from './CollapseIcon';

const styles = {
    collapseIconBlock: {
        marginRight: '10px'
    }
}

const LeftBlock = () => {
    return (
        <div className='d-flex align-items-center'>
            <div style={styles.collapseIconBlock}>
                <CollapseIcon />
            </div>
            <Logo />
        </div>
    )
}

export { LeftBlock };