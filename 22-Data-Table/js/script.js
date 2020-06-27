//***********  PARTE 1  ***********

//ej01

// const precioMaquina = (componentes) => {
//     return 320
// }

const precioMaquina = (componentes) => {
    return local.precios.reduce((totalPrecio, precioComponente) => {
        return totalPrecio = (componentes.includes(precioComponente.componente))
            ? totalPrecio + precioComponente.precio
            : totalPrecio
    }, 0);

}


//ej02
// const cantidadVentasComponente = (componente) => {
//     return 2
// }

const cantidadVentasComponente = (componente) => {
    return local.ventas.reduce((vecesVendida, venta) => {
        return vecesVendida = (venta.componentes.includes(componente) ? vecesVendida + 1 : vecesVendida)
    }, 0);

}


//ej03
// const vendedoraDelMes = (mes, anio) => {
//     return "Ada"
// }

// const vendedoraDelMes = (mes, anio) => {

//     const { ventas } = local

//     const ventasPorFecha = ventas.filter(venta => venta.fecha.getMonth() === (mes - 1) && venta.fecha.getFullYear() === anio);

//     const vendedores = ventasPorFecha.map(venta => {
//         return { nombre: venta.nombreVendedora, precio: precioMaquina(venta.componentes) }
//     })

//     const vendedoresPrecio = vendedores.reduce((accum, vendedor) => {
//         (accum[vendedor.nombre])
//             ? accum[vendedor.nombre] += vendedor.precio
//             : accum[vendedor.nombre] = vendedor.precio
//         return accum
//     }, {})

//     return mayorDeUnObjeto(vendedoresPrecio)

// }

const obtenerVentasPorFecha = (mes, anio) => {

    const { ventas } = local

    return ventas.filter(venta => venta.fecha.getMonth() === (mes - 1) && venta.fecha.getFullYear() === anio);

}

const vendedoraDelMes = (mes, anio) => {

    const ventasPorFecha = obtenerVentasPorFecha(mes, anio)
    const vendedoresPrecio = ventasPorFecha.reduce((accum, venta) => {
        accum[venta.nombreVendedora]
            ? accum[venta.nombreVendedora] += precioMaquina(venta.componentes)
            : accum[venta.nombreVendedora] = precioMaquina(venta.componentes)
        return accum
    }, {})

    return mayorDeUnObjeto(vendedoresPrecio)

}


const mayorDeUnObjeto = (objeto) => {
    const valores = Object.values(objeto);
    const indice = valores.indexOf(Math.max(...valores));
    return Object.keys(objeto)[indice];
};


//ej04
// const ventasMes = (mes, anio) => {
//     return 1250
// }

const ventasMes = (mes, anio) => {

    const ventasPorFecha = obtenerVentasPorFecha(mes, anio)

    // console.log(ventasPorFecha);

    return ventasPorFecha.reduce((acc, venta) => {

        acc += precioMaquina(venta.componentes)
        return acc
    }, 0)
}


//ej05
// const ventasVendedora = (nombre) => {
//     return 900
// }

const ventasVendedora = (nombre) => {

    const { ventas } = local

    const ventasVendedora = ventas.filter(vendedora => vendedora.nombreVendedora == nombre)


    return ventasVendedora.reduce((acc, venta) => {

        acc += precioMaquina(venta.componentes)
        return acc
    }, 0)

}


//ej06
// const componenteMasVendido = () => {
//     return "Monitor GPRS 3000"
// }

const componenteMasVendido = () => {
    const { ventas, precios } = local

    const arrComponentes = precios.map(componente => {
        return componente.componente
    })

    // console.log(arrComponentes)

    const ventasEquipos = arrComponentes.reduce((acc, componente, indice) => {

        return { ...acc, [arrComponentes[indice]]: cantidadVentasComponente(componente) }

    }, {})

    // console.log(ventasEquipos)

    return mayorDeUnObjeto(ventasEquipos);

}


//ej07

// const huboVentas = (mes, anio) => {
//     return false
// }

const huboVentas = (mes, anio) => {
    const ventasPorFecha = obtenerVentasPorFecha(mes, anio)
    // console.log(ventasPorFecha)
    // console.log((ventasPorFecha[0] !== undefined))
    return ((ventasPorFecha[0] !== undefined))
}

//***********  PARTE 2  ***********

//ej08

const obtenerVentasPorSucursal = (sucursal) => {

    const { ventas } = local

    return ventas.filter(venta => venta.sucursal === sucursal);

}

const ventasSucursal = (sucursal) => {

    const ventasPorSucursal = obtenerVentasPorSucursal(sucursal);

    // console.log(ventasPorSucursal);
    // console.log(ventasPorSucursal.reduce((totalVentas, venta) => {
    //     return totalVentas += precioMaquina(venta.componentes);
    // }, 0))

    return ventasPorSucursal.reduce((totalVentas, venta) => {
        return totalVentas += precioMaquina(venta.componentes);
    }, 0)
}

//ej09

const sucursalDelMes = (mes, anio) => {

    const ventasPorFecha = obtenerVentasPorFecha(mes, anio);

    const ventasSucursal = ventasPorFecha.reduce((accum, venta) => {
        accum[venta.sucursal]
            ? accum[venta.sucursal] += precioMaquina(venta.componentes)
            : accum[venta.sucursal] = precioMaquina(venta.componentes)
        return accum
    }, {})

    // console.log(mayorDeUnObjeto(ventasSucursal));

    return mayorDeUnObjeto(ventasSucursal);

}

//* 


const vendedoraEstrella = () => {

    const { ventas } = local;

    const vendedora = ventas.reduce((accum, venta) => {
        accum[venta.nombreVendedora]
            ? accum[venta.nombreVendedora] += precioMaquina(venta.componentes)
            : accum[venta.nombreVendedora] = precioMaquina(venta.componentes)
        return accum
    }, {})

    return mayorDeUnObjeto(vendedora)

}



