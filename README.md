# Instrucciones para realizar el Examen del Tercer Parcial (Septiembre - Diciembre 2025)
Este proyecto consiste en completar una página web donde los usuarios pueden hacer un pedido de hamburguesas personalizadas. A continuación, se detallan los puntos que deberás implementar para que el sistema calcule correctamente el total del pedido.

---

##  Checklist de Funcionalidades por Implementar

### 1. Asignar atributos a los botones de selección de pan

* **Problema:** Los radio buttons no tienen `name` ni `value`.
* **Solución:** Asigna el mismo atributo `name="pan"` a todos los radios.
* **Valores sugeridos:**

  * Clásico: `value="0"`
  * Con ajonjolí: `value="20"`
  * Integral: `value="20"`
  * Brioche: `value="50"`

### 2. Crear función `calcularTotal()` en JavaScript

Implementa una función en un bloque `<script>` que haga lo siguiente:

* Leer la especialidad seleccionada y asignar su precio base:

  * Clásica: `$80`
  * BBQ: `$100`
  * Tocino: `$120`
  * Doble Carne: `$150`
  * Hawaiana: `$180`

* Leer el radio button de pan seleccionado y obtener su valor (`+0`, `+20`, `+50`).

* Contar los ingredientes adicionales seleccionados y multiplicar por `$5.00` cada uno.

* Leer la cantidad de hamburguesas desde el input `#cantidad`.

* Verificar si se seleccionó la opción "¿Es a domicilio?" y, si es así, sumar `$30` al total final.

### 3. Calcular el total

Usa una fórmula similar a esta:

```javascript
let total = (precioBase + precioPan + (numIngredientes * 5)) * cantidad;
if (esDomicilio) {
  total += 30;
}
```

### 4. Mostrar el resultado en el HTML

* Utiliza `document.getElementById('total').innerText` para mostrar el total en pantalla.
* Formato sugerido: `Total: $XXX.00 MXN`

### 5. Validación (opcional pero recomendable - (Puntos Extras))

* Asegúrate de que la cantidad de productos sea mayor a 0.
* Puedes mostrar un mensaje de error si algún campo está vacío o inválido.

### 6. Agregar evento al botón

* Asegúrate de que el botón tenga:

```html
<button type="button" onclick="calcularTotal()">Calcular Total</button>
```

---

## Sugerencias de Mejora (Puntos Extras)

* Agrega estilos visuales a los botones y radios para que se vean más atractivos.
* Puedes incluir imágenes representativas junto a cada tipo de especialidad o pan.

---

## Archivos del repositorio

* `index.html` → Página principal con el formulario.
* `styles.css` → Página con los estilos.
* `script.js` → Página en donde se deben realizar los cálculos.
* `README.md` → Este archivo de instrucciones.
* `img/` → Carpeta con imágenes de los productos.

---

## Objetivo del ejercicio

Este reto combina HTML, formularios, estilos CSS y lógica con JavaScript. El objetivo es aplicar conocimientos de DOM, eventos, estructuras de control y cálculo dinámico.

¡Mucho éxito y buen provecho! 🍔
