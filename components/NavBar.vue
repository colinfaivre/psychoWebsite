<template>
<div class="nav-bar-container">
  <NavLinks/>
</div>
</template>

<script>
import NavLinks from '@/components/NavLinks'
export default {
  components: {
    NavLinks,
  }
}
</script>

<style lang="scss">
.nav-bar-container {
  color: $primary;
  font-weight: 500;
}
</style>
