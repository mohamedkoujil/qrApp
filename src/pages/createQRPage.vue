<script setup>
import AdComponent from "../components/AdComponent.vue";
import formComponent from "../components/FormComponent.vue";
import qrDisplayComponent from "../components/QrDisplayComponent.vue";
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
  <div class="container mx-auto flex flex-col lg:flex-row justify-between">
    <!-- Ad for desktop, hidden on mobile -->
    <!--<AdComponent class="hidden lg:block" />-->

    <!-- Main QR Generator Area -->
    <div
      class="flex flex-col items-center justify-center h-screen relative w-full"
    >
      <!-- Ad for mobile, shown only on small screens -->
      <AdComponent class="sm:hidden block absolute top-2 right-2" />

      <!-- QR Code Display -->
      <qrDisplayComponent :value="text" :size="size" class="qr-container" />

      <!-- Form to Input Text -->
      <formComponent
        :text="text"
        @handleChange="handleChange"
        @handleSubmit="handleSubmit"
        class="form mt-4"
      />
    </div>

    <!-- Ad for desktop, hidden on mobile -->
    <!--<AdComponent class="hidden lg:block" />-->
  </div>
</template>

<style scoped>
/* Estilo específico para que al imprimir solo se muestre el QR */
@media print {
  body * {
    visibility: hidden;
  }

  .qr-container {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .form {
    display: none;
  }
}
</style>
