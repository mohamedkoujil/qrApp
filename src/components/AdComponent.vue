<template>
  <div>
    <h1>AdComponent</h1>
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-6961285885320539"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", "ca-pub-6961285885320539"); // Reemplaza con tu ID de AdSense
    document.head.appendChild(script);
  },
};
</script>

<style scoped></style>
