const colors = {
    primary: '#192655',
    secondary: '#3876BF',
    danger: '#E1AA74',
    info: '#b1bffd',
    white: '#f7f7f7',
    silver: '#8f8f8f',
    whiteSilver: '#e9e9e9',

}

export const getColor = (color) => {
    return color == 'silver' && colors.silver || color == 'white' && colors.white || color == 'primary' && colors.primary || color == 'secondary' && colors.secondary || color == 'danger' && colors.danger || color == 'info' && colors.info
}

export const title = 'FrenchieLovers'


export default colors