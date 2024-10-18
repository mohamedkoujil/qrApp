<template>
  <div>
    <ins
      class="adsbygoogle"
      style="display: block"
      data-ad-client="ca-pub-XXXXXXXXXX"
      <!--
      Reemplaza
      con
      tu
      ID
      de
      AdSense
      --
    >
      data-ad-slot="1234567890"
      <!-- Reemplaza con tu slot de anuncio -->
      data-ad-format="auto" data-full-width-responsive="true" ></ins
    >
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    script.async = true;
    script.setAttribute("data-ad-client", "ca-pub-XXXXXXXXXX"); // Reemplaza con tu ID de AdSense
    document.head.appendChild(script);
  },
};
</script>

<style scoped>
/* Puedes personalizar el estilo aquí si es necesario */
</style>
