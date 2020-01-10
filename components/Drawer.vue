<template>
  <div class="drawer-container">
    <n-link class="home-link" to="/" @click.native="closeMenu()">
      <h1 class="drawer-title">
        Jean-Yves
        <br>
        Gauthier
      </h1>
    </n-link>

    <div class="links">
      <n-link class="links-item" to="/#section1" @click.native="closeMenu()" v-smooth-scroll>Section 1</n-link>
      <n-link class="links-item" to="/#section2" @click.native="closeMenu()" v-smooth-scroll>Section 2</n-link>
      <n-link class="links-item" to="/#hours" @click.native="closeMenu()" v-smooth-scroll>Horaires</n-link>
      <n-link class="links-item" to="/#office" @click.native="closeMenu()" v-smooth-scroll>Cabinet</n-link>
      <n-link class="links-item" to="/#map" @click.native="closeMenu()" v-smooth-scroll>Adresse</n-link>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)
import Footer from '@/components/Footer'

export default {
  components: {
    Footer,
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
}
.links {
  margin-top: 20px;
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  // align-items: center;
}
.links-item {
  border-radius: 3px;
  text-decoration: none;
  color: inherit;
  font-size: 25px;
  width: 100%;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 15px;
  &:hover {
    background-color: $primary-med-light;
  }
}

</style>
