<template>

  <n-link class="back-container" to="/" @click.native="closeMenu()">
    <i class="material-icons">
      arrow_back
    </i>
  </n-link>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$store.commit('openMenu')
    },
    closeMenu() {
      this.$store.commit('closeMenu')
    }
  }
}
</script>

<style scoped lang="scss">
.back-container {
  cursor: pointer;
}
.material-icons {
  font-size: 35px;
  color: $primary-light;
  padding: 5px;
  border-radius: 22px;
  cursor: pointer;
  &:hover {
    background-color: $secondary-dark;
  }
}
</style>
