export const colors = {
    primary:'#192655',
    secondary:'#3876BF',
    danger: '#E1AA74',
    info:'#F3F0CA',
    white:'#fff'
}

export const getColor = (color) => {
    return color == 'white' && colors.white || color == 'primary' && colors.primary || color == 'secondary' && colors.secondary || color == 'danger' && colors.danger || color == 'info' && colors.info  
}

export const title ='FrenchieLovers'