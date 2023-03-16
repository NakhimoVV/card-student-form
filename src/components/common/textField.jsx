import React from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, name, value, onChange, error }) => {
    const getInputClasses = () => 'form-control' + (error ? ' is-invalid' : '')

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

TextField.defaultProps = {
    type: 'text'
}
TextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
}

export default TextField
