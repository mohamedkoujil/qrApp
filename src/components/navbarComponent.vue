<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();

const isActiveRoute = (routeName) => computed(() => route.name === routeName);

console.log(route);
</script>

<template>
  <div>
    <nav class="navbar">
      <div
        @click="router.push({ name: 'createQR' })"
        :class="{ active: isActiveRoute('createQR') }"
      >
        Create QR Code
      </div>
      <div
        @click="router.push({ name: 'scanQR' })"
        :class="{ active: isActiveRoute('scanQR') }"
      >
        Scan QR Code
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  margin-bottom: 20px;
}

.navbar div {
  display: inline-block;
  padding: 10px;
  cursor: pointer;
}

.navbar div.active {
  background-color: #f4f4f4;
}
</style>
