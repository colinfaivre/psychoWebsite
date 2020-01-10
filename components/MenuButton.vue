<template>
  <div class="menu-container" @click.stop="openMenu()">
    <i class="material-icons">
      menu
    </i>
  </div>
</template>

<script>
export default {
  methods: {
    openMenu() {
      this.$store.commit('openMenu')
    }
  }
}
</script>

<style scoped lang="scss">
.menu-container {
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
