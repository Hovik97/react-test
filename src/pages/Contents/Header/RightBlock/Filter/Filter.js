import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCategoryBySearch } from '../../../../../redux/actions/contentAction';

const Filter = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <input
                onChange={(event) => dispatch(filterCategoryBySearch(event.target.value))}
                type="text"
            />
        </div>
    )
}

export { Filter };