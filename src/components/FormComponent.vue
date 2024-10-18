<script setup>
import { ref } from "vue";
const emit = defineEmits(["handleChange", "handleSubmit"]);

const handleChange = (e) => {
  emit("handleChange", e);
};

const handleSubmit = (e) => {
  emit("handleSubmit", e);
};
</script>

<template>
  <!-- Contenedor principal centrado -->
  <div class="flex flex-col items-center justify-center p-4">
    <form
      class="bg-white p-6 rounded-lg shadow-md space-y-4 w-80"
      @submit.prevent="handleSubmit"
    >
      <label for="text" class="block text-gray-700 font-medium mb-2"
        >Text</label
      >
      <input
        type="text"
        id="text"
        name="text"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        @input="handleChange"
      />
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<style scoped></style>
