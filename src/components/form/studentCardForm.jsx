import React, { useEffect, useState } from 'react'
import { validationSchema } from './validationSchema'
import { validate } from '../../utils/validator'
import FormLayout from '../common/formLayout'
import TextField from '../common/textField'
import { useHistory, useLocation } from 'react-router-dom'

const StudentCardForm = () => {
    const history = useHistory()
    const { pathname } = useLocation()

    const [values, setValues] = useState({
        name: '',
        surname: '',
        birthYear: '',
        portfolio: ''
    })
    const [errors, setErrors] = useState({})
    const isValid = Object.keys(errors).length === 0

    useEffect(() => {
        const errors = validate(values, validationSchema)
        setErrors(errors)
    }, [values])

    const handleChange = (e) => {
        const { value, name } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const { name, surname, birthYear, portfolio } = values

    if (pathname === '/edit') {
        useEffect(() => {
            setValues(JSON.parse(localStorage.getItem('student')))
        }, [])
        const handleSubmit = (e) => {
            e.preventDefault()
            if (isValid) {
                localStorage.setItem('student', JSON.stringify(values))
                alert('Карточка обновлена!')
                history.goBack()
            }
        }
        return (
            <FormLayout title="Редактировать">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        name="name"
                        onChange={handleChange}
                        value={name}
                        error={errors.name}
                    />
                    <TextField
                        label="Фамилия"
                        name="surname"
                        onChange={handleChange}
                        value={surname}
                        error={errors.surname}
                    />
                    <TextField
                        label="Год рождения"
                        name="birthYear"
                        onChange={handleChange}
                        value={birthYear}
                        error={errors.birthYear}
                    />
                    <TextField
                        label="Портфолио"
                        name="portfolio"
                        onChange={handleChange}
                        value={portfolio}
                        error={errors.portfolio}
                    />
                    <button
                        type="button"
                        className="btn btn-secondary mx-auto"
                        onClick={() => history.goBack()}
                    >
                        Назад
                    </button>{' '}
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="btn btn-primary mx-auto"
                    >
                        Обновить
                    </button>
                </form>
            </FormLayout>
        )
    } else {
        const handleSubmit = (e) => {
            e.preventDefault()
            if (isValid) {
                localStorage.setItem('student', JSON.stringify(values))
                alert('Карточка студента создана!')
                history.goBack()
            }
        }
        return (
            <FormLayout title="Создать">
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Имя"
                        name="name"
                        onChange={handleChange}
                        value={name}
                        error={errors.name}
                    />
                    <TextField
                        label="Фамилия"
                        name="surname"
                        onChange={handleChange}
                        value={surname}
                        error={errors.surname}
                    />
                    <TextField
                        label="Год рождения"
                        name="birthYear"
                        onChange={handleChange}
                        value={birthYear}
                        error={errors.birthYear}
                    />
                    <TextField
                        label="Портфолио"
                        name="portfolio"
                        onChange={handleChange}
                        value={portfolio}
                        error={errors.portfolio}
                    />
                    <button
                        type="submit"
                        disabled={!isValid}
                        className="btn btn-primary mx-auto"
                    >
                        Создать
                    </button>
                </form>
            </FormLayout>
        )
    }
}

export default StudentCardForm
