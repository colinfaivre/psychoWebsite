<template>
  <button class="menu-container" tabindex="0" @click.stop="openMenu()">
    <i class="material-icons">
      menu
    </i>
  </button>
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
button {
  border: 0;
  padding: 0;
  font-family: inherit;
  font-size: 100%;
  background: none;
}
.material-icons {
  font-size: 35px;
  color: $primary;
  padding: 5px;
  border-radius: 22px;
  cursor: pointer;
  &:hover {
    background-color: $secondary-dark;
  }
}
</style>
