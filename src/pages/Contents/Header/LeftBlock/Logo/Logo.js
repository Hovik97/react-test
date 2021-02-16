import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogo } from '../../../../../redux/actions/logoAction';

const styles = {
    logoBlock: {
        backgroundColor: 'white',
        height: '40px'
    },
    logo: {
        height: 'inherit'
    }
}

const Logo = () => {

    const dispatch = useDispatch();
    const logoUrl = useSelector(state => state.logo.logoUrl);

    useEffect(() => {
        dispatch(getLogo());
    }, []);

    return (
        <div style={styles.logoBlock}>
            <img style={styles.logo} src={logoUrl} alt="logo"/>
        </div>
    )
}

export { Logo };