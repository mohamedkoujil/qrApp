<script setup>
import formComponent from "./components/FormComponent.vue";
import qrDisplayComponent from "./components/QrDisplayComponent.vue";
import { ref } from "vue";

const text = ref("");
const size = ref(200);

const handleChange = ({ target: { value: inputText } }) => {
  text.value = inputText;
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Solo imprimirá el QR
  window.print();
};
</script>

<template>
  <!-- Contenedor principal con fondo azul navy y centrado -->

  <div
    class="flex flex-col items-center justify-center bg-blue-900 bg-opacity-20 min-h-screen p-4 text-white"
  >
    <!-- Componente QR con clase específica para imprimir solo el QR -->
    <qrDisplayComponent :value="text" :size="size" class="qr-container" />

    <!-- Formulario para ingresar el texto -->
    <formComponent
      :text="text"
      @handleChange="handleChange"
      @handleSubmit="handleSubmit"
    />
  </div>
</template>

<style scoped>
@media print {
  /* Oculta todos los elementos de la página en la impresión */
  body * {
    display: none;
  }

  /* Muestra solo el QR durante la impresión */
  .qr-container,
  .qr-container * {
    display: block;
  }

  /* Establece el tamaño y la posición del contenedor QR */
  .qr-container {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>
