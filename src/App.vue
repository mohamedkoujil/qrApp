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
  <div
    class="flex flex-col items-center justify-center bg-blue-900 bg-opacity-20 min-h-screen p-4 text-white"
  >
    <!-- Componente QR -->
    <qrDisplayComponent :value="text" :size="size" class="qr-container" />

    <!-- Formulario para ingresar el texto -->
    <formComponent
      :text="text"
      @handleChange="handleChange"
      @handleSubmit="handleSubmit"
      class="form"
    />
  </div>
</template>

<style scoped>
/* Estilo específico para que al imprimir solo se muestre el QR */
@media print {
  .qr-container {
    display: block;
  }

  .form {
    display: none;
  }
}
</style>
