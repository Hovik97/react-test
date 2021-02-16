import { combineReducers } from 'redux';
import { categoriesReducer } from './reducers/categoriesReducer';
import { collapseSidebarReducer } from './reducers/collapseSidebarReducer';
import { logoReducer } from './reducers/logoReducer';
import { headerReducer } from './reducers/headerReducer';
import { contentReducer } from './reducers/contentReducer';
import { userFormReducer } from './reducers/userFormReducer';

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    logo: logoReducer,
    collapse: collapseSidebarReducer,
    contents: contentReducer,
    header: headerReducer,
    userForm: userFormReducer
});