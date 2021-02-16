import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { getContent } from '../../redux/actions/contentAction';

const styles = {
    title: {
        color: 'white',
        fontSize: '30px',
        'textAlign': 'center'
    }
}

const Content = () => {
    const {id: contentId} = useParams();
    const dispatch = useDispatch();
    const content = useSelector(state => state.contents.content);

    useEffect(() => {
        dispatch(getContent(contentId));
    }, []);

    return (
        <div style={styles.title}>
            {content.title}
        </div>
    )
}

export { Content };