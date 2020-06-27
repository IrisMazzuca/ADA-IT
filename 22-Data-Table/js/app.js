const tableSales = document.getElementById("tableSales");
const tableSalesByBranch = document.getElementById("tableSalesByBranch");
const bestProduct = document.getElementById("best-product");
const bestSeller = document.getElementById("best-seller");

// para el modal
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const btnModal = document.getElementById("btnModal");
const close = document.getElementById("close");
const selectVendedora = document.getElementById("vendedora--select");
const selectComponente = document.getElementById("componente--select");
const selectSucursal = document.getElementById("sucursal--select");



// nueva venta con modal:

btnModal.addEventListener("click", () => {
    modal.classList.replace("fade", "show");
    modalContent.classList.add("active");
});

close.addEventListener("click", () => {
    modal.classList.replace("show", "fade");
    modalContent.classList.remove("active");
});

modal.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.classList.replace("show", "fade");
        modalContent.classList.remove("active");
    }
});

// crea un nuevo objeto por cada nueva venta:
const newSaleResult = () => {
    const { ventas } = local;

    const nuevaVenta = {
        id: (ventas.length + 1),
        fecha: new Date(),
        nombreVendedora: selectVendedora.options[selectVendedora.selectedIndex].value,
        sucursal: selectSucursal.options[selectSucursal.selectedIndex].value,
        componentes: [...selectComponente.options].filter(option => option.selected).map(option => option.value),
    }

    return nuevaVenta
};

// agrega (pushea) el nuevo objeto dentro del array de ventas:
const newSalePush = (input) => {
    const { ventas } = local;

    ventas.push(input);

    tableSalesGenerator();
    tableSalesByBranch();
    bestProductName();
    bestSellerName();
};


// genera las opciones desplegables en el modal para la nueva venta:
const modalOptionsGenerator = () => {
    const { vendedoras, precios, sucursales } = local;

    //crear arr de componentes
    const arrComponentes = precios.reduce((acc, componente) => {
        return [...acc, componente.componente]
    }, []);


    selectVendedora.innerHTML = vendedoras.reduce((html, vendedora) => {
        return (
            html +
            `
      <option value="${vendedora}">${vendedora}</option>
        `
        );
    }, "");

    selectComponente.innerHTML = arrComponentes.reduce((html, componente) => {
        return (
            html +
            `
    <option value="${componente}">${componente}</option>
      `
        );
    }, "");

    selectSucursal.innerHTML = sucursales.reduce((html, sucursal) => {
        return (
            html +
            `
    <option value="${sucursal}">${sucursal}</option>
      `
        );
    }, "");
};

// botón modale "Nueva Venta":
btnConfirm.addEventListener("click", () => {
    modal.classList.replace("show", "fade");
    modalContent.classList.remove("active");

    nuevaVenta = newSaleResult();

    newSalePush(nuevaVenta);
});


// función para generar la tabla con el detalle de todas las ventas

const dateFormat = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
};

const tableSalesGenerator = () => {
    const { ventas } = local;

    tableSales.innerHTML = ventas.reduce((html, venta) => {
        return (
            html +
            `<tr>
                <td>${dateFormat(venta.fecha)}</td>
                <td>${venta.nombreVendedora}</td>
                <td>${venta.sucursal}</td>
                <td>${venta.componentes}</td>
                <td>${precioMaquina(venta.componentes)}</td>
                <td title="Eliminar" class="bin-icon"><i onclick="deleteSale(${venta.id})" class="fas fa-trash"></i></td>
            </tr>
            `
        );
    }, "");
};


// función para generar la tabla con las ventas por sucursal

const tableSalesByBranchGenerator = () => {
    const { sucursales } = local;

    tableSalesByBranch.innerHTML = sucursales.reduce((html, sucursal) => {
        return (
            html +
            `<tr>
                <td>${sucursal}</td>
                <td>${ventasSucursal(sucursal)}</td>
            </tr>`
        )
    }, "");
};



// funcion para generar el nombre del producto estrella

const bestProductName = () => {

    bestProduct.innerHTML = componenteMasVendido();
};



// funcion para generar el nombre de la vendedora estrella

const bestSellerName = () => {

    bestSeller.innerHTML = vendedoraEstrella();
};


// funcion para eliminar venta con MODAL

const deleteSale = (id) => {

    Swal.fire({
        title: 'Está seguro que quiere eliminar la venta?',
        text: "No podrá revertirlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.value) {

            local.ventas = local.ventas.filter((venta) => {
                return venta.id !== id;
            });

            tableSalesGenerator();
            tableSalesByBranch();
            bestProductName();
            bestSellerName();

            Swal.fire(
                'Eliminado!',
                'La venta ha sido eliminada',
                'success'
            )
        }
    })

};




modalOptionsGenerator();
tableSalesGenerator();
tableSalesByBranchGenerator();
bestProductName();
bestSellerName();

