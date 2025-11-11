// script.js — calcular precios del formulario de pedido

// Mapa de precios base por especialidad (en MXN)
const preciosEspecialidad = {
    clasica: 80,
    bbq: 100,
    tocino: 120,
    doble: 150,
    hawaiana: 180,
};

const precioIngrediente = 5; // por ingrediente adicional
const envioDomicilio = 30; // costo fijo por domicilio

// Referencias al DOM
const selectEspecialidad = document.getElementById('especialidad');
const panRadios = document.querySelectorAll('input[name="pan"]');
const ingredientesCheckboxes = document.querySelectorAll('.checkbox-list input[type="checkbox"]');
const cantidadInput = document.getElementById('cantidad');
const domicilioCheckbox = document.getElementById('domicilio');
const totalDiv = document.getElementById('total');
const btnCalcular = document.getElementById('calcularBtn');

function obtenerPrecioEspecialidad() {
    const key = selectEspecialidad.value;
    return preciosEspecialidad[key] || 0;
}

function obtenerPrecioPan() {
    const seleccionado = document.querySelector('input[name="pan"]:checked');
    return seleccionado ? Number(seleccionado.value) : 0;
}

function contarIngredientesSeleccionados() {
    let count = 0;
    ingredientesCheckboxes.forEach(cb => { if (cb.checked) count++; });
    return count;
}

function formatearMXN(valor) {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(valor);
}

function calcularTotal() {
    const precioBase = obtenerPrecioEspecialidad();
    const extraPan = obtenerPrecioPan();
    const ingredientesCount = contarIngredientesSeleccionados();
    const costoIngredientes = ingredientesCount * precioIngrediente;
    const cantidad = Math.max(1, parseInt(cantidadInput.value, 10) || 1);

    const subtotalPorUnidad = precioBase + extraPan + costoIngredientes;
    let total = subtotalPorUnidad * cantidad;

    if (domicilioCheckbox.checked) total += envioDomicilio;

    // Actualizar DOM
    totalDiv.textContent = 'Total: ' + formatearMXN(total);

    return{ 
        precioBase,
        extraPan,
        ingredientesCount,
        subtotalPorUnidad,
        cantidad,
        domicilio: domicilioCheckbox.checked,
        total,
    };
       
}


btnCalcular.addEventListener('click', calcularTotal);

// Recalcular automáticamente al cambiar cualquier entrada relevante
selectEspecialidad.addEventListener('change', calcularTotal);
panRadios.forEach(r => r.addEventListener('change', calcularTotal));
ingredientesCheckboxes.forEach(cb => cb.addEventListener('change', calcularTotal));
cantidadInput.addEventListener('input', calcularTotal);
domicilioCheckbox.addEventListener('change', calcularTotal);

// Calcular inicialmente
document.addEventListener('DOMContentLoaded', () => {
    
    if (!document.querySelector('input[name="pan"]:checked')) {
        const primerPan = document.querySelector('input[name="pan"]');
        if (primerPan) primerPan.checked = true;
    }
    calcularTotal();
});