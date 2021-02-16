import React from 'react';
import { Filter } from './Filter';
import { EmailBtn } from './EmailBtn';
import { useSelector } from 'react-redux';

const styles = {
    block: {
      width: '100%',
      paddingLeft: '10px'
    },
    description: {
        fontSize: '12px'
    },
    filterBlock: {
        marginRight: '10px'
    }
}

const RightBlock = () => {

    const text = useSelector(state => state.header.text);

    return (
        <div style={styles.block} className='d-flex align-items-center justify-content-between'>
            <div style={styles.description} className='texts_common_color'>
                {text}
            </div>
            <div className='d-flex align-items-center'>
                <div style={styles.filterBlock}>
                    <Filter />
                </div>
                <EmailBtn />
            </div>
        </div>
    )
}

export { RightBlock };