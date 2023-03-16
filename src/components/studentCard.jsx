import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardValue from './common/cardValue'

const StudentCard = () => {
    const [data, setData] = useState()
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('student')))
    }, [])

    return (
        <>
            <h1>Карточка студента</h1>
            {!data ? (
                <>
                    <p>Нет данных</p>
                    <Link to="/create">
                        <button className="btn btn-primary">Добавить</button>
                    </Link>
                </>
            ) : (
                <>
                    <CardValue value={data} />
                    <Link to="/edit">
                        <button className="btn btn-primary">
                            Редактировать
                        </button>
                    </Link>
                </>
            )}
        </>
    )
}

export default StudentCard
