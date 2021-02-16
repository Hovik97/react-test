import React, { useEffect } from 'react';
import { Category } from './Category';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../../redux/actions/categoriesAction';

const Categories = () => {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const $elements = categories.map((category, i) => (
        <Category item={category} key={`navbar-item-${i}`} />
    ))

    return (
        <nav className="d-flex flex-column">
            {$elements}
        </nav>
    )
}

export { Categories };