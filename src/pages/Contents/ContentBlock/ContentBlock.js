import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import './ContentBlock.css';

const ContentBlock = ({ content }) => {

    const history = useHistory();

    const addContentToCollection = () => {
        const collection = JSON.parse(localStorage.getItem('collection'));
        if (!collection.find(cont => cont.id === content.id)) {
            collection.push(content);
            localStorage.setItem('collection', JSON.stringify(collection));
        }
    }

    return (
        <div className="content-card position-relative">
            <img className="card-image " src={content.image} />
            <div className='cont_name_block'>
                <div className='cont_name'>
                    {content.name}
                </div>
                <button className='add_btn' onClick={() => addContentToCollection()}>
                    Add
                </button>
            </div>
            <img className='content_icon' 
                onClick={() => history.push(`/content/${content.id}`)} 
                src="./assets/collapseIcon.png" 
                alt=""
            />
        </div>
    )
}

ContentBlock.propTypes = {
    content: PropTypes.object.isRequired
}

export { ContentBlock };