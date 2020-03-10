<template>
  <div class="drawer-container">
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
