import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    input: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid #b7b4b4',
        color: '#b7b4b4',
        outline: 'none'
    }
}

const InputField = ({ name, value, error = '', config, onChange, onBlur }) => {
    if (!config) return null
    return (
        <div>
            <input
                style={styles.input}
                type={config.type}
                placeholder={config.title}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            { error && <p>{error}</p> }
        </div>
    )
}

InputField.propTypes = {
    config: PropTypes.object,
    changeHandler: PropTypes.func.isRequired
}

export { InputField };