const formatearDinero = cantidad => {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'COP'
    })
}

export {
    formatearDinero
}


