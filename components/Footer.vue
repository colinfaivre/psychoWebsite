<template>
  <div class="footer">
    <a href="tel:+33681754218">
      <i class="material-icons">
        phone
      </i>
    </a>
    <a href="mailto:jeanyves.gauthier.gr.travail@gmail.com" target="_blank" rel="noopener noreferrer">
      <i class="material-icons">
        mail
      </i>
    </a>
    <n-link @click.native="closeMenu()" to="/legal" no-prefetch>
      <i class="material-icons">
        account_balance
      </i>
    </n-link>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$store.commit('closeMenu')
    }
  },
}
</script>

<style scoped lang="scss">
.footer {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: center;
  a {
    color: inherit;
    text-decoration: none;
  }
}
.material-icons {
  margin-left: 14px;
  margin-right: 14px;
  padding: 10px;
  border-radius: 22px;
  cursor: pointer;
  color: $accent;
  &:hover {
    background-color: $primary-med-light;
  }
}
</style>
