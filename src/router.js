import { createMemoryHistory, createRouter } from "vue-router";

import createQRPage from "./pages/createQRPage.vue";
import scanQRPage from "./pages/scanQRPage.vue";

const routes = [
  { path: "/", redirect: "/createQR" },
  { path: "/createQR", component: createQRPage, name: "createQR" },
  { path: "/scanQR", component: scanQRPage, name: "scanQR" },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
