// Экспортируем объект
export default {
    isRequired: (value) => Boolean(value.trim()),
    isUrl: (value) => /^https?:\/\/\S+$/g.test(value),
    isYearCorrect: (value, length) =>
        value.length >= length && value <= new Date().getFullYear()
}
