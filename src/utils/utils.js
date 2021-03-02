export const generateArray = (number) => {
    return new Array(number).fill('').map((_, i) => i + 1)
}