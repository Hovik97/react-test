import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSidebarPosition } from '../../../../../redux/actions/collapseSidebarAction';

const styles = {
    iconBlock: {
        width: '40px'
    },
    icon: {
        width: '100%',
        cursor: 'pointer'
    }
}

const CollapseIcon = () => {

    const dispatch = useDispatch();

    return (
        <div style={styles.iconBlock}>
            <img
                style={styles.icon}
                src="./assets/collapseIcon.png"
                alt="collapse"
                onClick={() => dispatch(changeSidebarPosition())}
            />
        </div>
    )
}

export { CollapseIcon };