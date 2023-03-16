export function displayOld(year) {
    const yearNow = new Date().getFullYear()
    const dif = yearNow - Number(year)
    let str
    let count = dif % 100
    if (count >= 5 && count <= 20) {
        str = 'лет'
    } else {
        count = count % 10
        if (count === 1) {
            str = 'год'
        } else if (count >= 2 && count <= 4) {
            str = 'года'
        } else {
            str = 'лет'
        }
    }
    return `(${dif} ${str})`
}
