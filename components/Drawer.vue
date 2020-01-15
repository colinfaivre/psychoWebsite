<template>
  <div class="drawer-container">

    <n-link class="home-link" to="/" @click.native="closeMenu()">
      <img src="@/assets/images/rings.png">
      <h1 class="drawer-title">
        Jean-Yves
        <br>
        Gauthier
      </h1>
    </n-link>

    <NavLinks/>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import NavLinks from '@/components/NavLinks'

export default {
  components: {
    Footer,
    NavLinks,
  },
  methods: {
    closeMenu() {
      this.$store.commit('closeMenu')
    }
  },
}
</script>

<style lang="scss">
.drawer-container {
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.home-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-top: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  width: calc(100% - 40px);
  border-radius: 3px;
  &:hover {
    background-color: $primary-med-light;
  }
}
.drawer-title {
  cursor: pointer;
  
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 35px;
  letter-spacing: 1px;
  line-height: 34px;
  color: $accent;
}
</style>
