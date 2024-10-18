<script setup>
import QrcodeVue from "qrcode.vue";
import { defineProps } from "vue";

const props = defineProps({
  value: {
    type: String,
    default: "https://www.google.com",
    required: true,
  },
  size: {
    type: Number,
    default: 200,
  },
});
</script>

<template>
  <div class="mb-8">
    <qrcode-vue
      :value="value"
      :size="size"
      level="H"
      render-as="svg"
      class="border-4 border-blue-500 rounded-lg"
    />
  </div>
</template>

<style scoped></style>
