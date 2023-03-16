import React from 'react'
import PropTypes from 'prop-types'
import { displayOld } from '../../utils/displayOld'

const CardValue = ({ value }) => {
    return (
        <>
            <p>
                <span className="fw-bold">Имя: </span>
                {value.name}
            </p>
            <p>
                <span className="fw-bold">Фамилия: </span>
                {value.surname}
            </p>
            <p>
                <span className="fw-bold">Год рождения: </span>
                {value.birthYear} {displayOld(value.birthYear)}
            </p>
            <p>
                <span className="fw-bold">Портфолио: </span>
                <a href={value.portfolio} target="_blank">
                    {value.portfolio}
                </a>
            </p>
        </>
    )
}
CardValue.propTypes = {
    value: PropTypes.object.isRequired
}

export default CardValue
