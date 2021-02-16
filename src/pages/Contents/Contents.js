import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ContentBlock } from './ContentBlock';
import { getContents } from '../../redux/actions/contentAction';
import './Contents.css'
import { Loader } from '../../mainComponents/Loader/Loader';

const Contents = () => {

    const dispatch = useDispatch();
    const { contents, name, description, isLoading } = useSelector(state => state.contents);
    const openedSidebar = useSelector(state => state.collapse.open);

    useEffect(() => {
        dispatch(getContents()); 
    }, []);

    const $elements = contents.map((content, i) => (
        <ContentBlock key={`content-item-${i}`} content={content} />
    ))

    return (
        <>
         { !isLoading ?
            <div>
                <Header />
                <main className='main_block d-flex'>
                    <aside className={'sidebar' + (openedSidebar ? ' open_sidebar' : ' close_sidebar')}>
                        <Sidebar />
                    </aside>
                    <div className={'wrapper' + (openedSidebar ? ' collapse_wrapper_style' : '')}>
                        <div className='content_top_block'>
                            <div className='content_title'>
                                {name}
                            </div>
                            <div className='content_description texts_common_color'>
                                {description}
                            </div>
                        </div>
                        <div className="contents-list-wrapper">
                            {$elements}
                        </div>
                    </div>
                </main>
            </div>
            :
            <Loader />
            }
        </>
      
    )
}

export { Contents };