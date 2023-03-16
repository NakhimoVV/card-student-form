export const validationSchema = {
    name: {
        isRequired: {
            message: 'Поле "Имя" обязательно для заполнения'
        }
    },
    surname: {
        isRequired: {
            message: 'Поле "Фамилия" обязательно для заполнения'
        }
    },
    birthYear: {
        isRequired: {
            message: 'Поле "Год рождения" обязательно для заполнения'
        },
        isYearCorrect: {
            //не может быть больше, чем текущий год
            message: 'Поле "Год рождения" не корректно',
            param: 4
        }
    },
    portfolio: {
        isRequired: {
            message: 'Поле "Портфолио" обязательно для заполнения'
        },
        isUrl: {
            message: 'Поле "Портфолио" должно быть ссылкой'
        }
    }
}
