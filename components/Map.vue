<template>
  <div class="map-container">
    <iframe title="carte" class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.4656267363184!2d1.2655108155701351!3d45.841979679107254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f934c0318d5edb%3A0x650584f0cc3f5bb0!2sGauthier%20Jean-Yves!5e0!3m2!1sfr!2sfr!4v1579094415613!5m2!1sfr!2sfr" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.map-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.map {
  width: 100%;
  max-width: 800px;
}
</style>
