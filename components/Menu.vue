<template>
  <div class="menu-container" @click="$emit('toggled')">
    <i class="material-icons">
      menu
    </i>
  </div>
</template>

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
