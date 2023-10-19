const colors = {
    primary: '#192655',
    secondary: '#3876BF',
    danger: '#E1AA74',
    info: '#F3F0CA',
    white: '#fff',
    silver: '#8f8f8f'
}

export const getColor = (color) => {
    return color == 'silver' && colors.silver || color == 'white' && colors.white || color == 'primary' && colors.primary || color == 'secondary' && colors.secondary || color == 'danger' && colors.danger || color == 'info' && colors.info
}

export const title = 'FrenchieLovers'


export default colors