import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { filterCategoryByName } from '../../../../../redux/actions/contentAction';
import './Category.css';

const Category = ({ item }) => {

    const dispatch = useDispatch();

    return (
        <div
            className='category_block'
            onClick={() => dispatch(filterCategoryByName(item.name))}
        >
            <div className='texts_common_color category_item'>
                {item.name}
            </div>
        </div>
    )
}

Category.propTypes = {
    item: PropTypes.object.isRequired
}

export { Category };