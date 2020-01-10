<template>
  <div :class="{'app': true, 'prevent-scroll': menuIsOpen}">
    <BackButton class="back-button" v-if="$nuxt.$route.path !== '/'"/>
    <MenuButton class="menu-button" />
    <Drawer :class="{'drawer':true, 'drawer-open': menuIsOpen}" />
    <div
      @click="closeMenu()"
      :class="{'background-layer': menuIsOpen}"
    />
    <nuxt class="page-container"/>
    <Footer id="footer" class="dark"/>
  </div>
</template>

<script>
import MenuButton from '@/components/MenuButton'
import BackButton from '@/components/BackButton'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'

export default {
  components: {
    Drawer,
    MenuButton,
    Footer,
    BackButton
  },
  data () {
    return {}
  },
  methods: {
    closeMenu() {
      this.$store.commit('closeMenu')
    }
  },
  computed: {
    menuIsOpen() {
      return this.$store.state.menuIsOpen
    }
  }
}
</script>

<style lang="scss">
html {
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'Roboto', serif;
  font-size: 16px;
  background-color: $primary;
  color: $primary;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
*:focus {
  outline: 0;
  -webkit-tap-highlight-color: transparent;
}
.app {
  position: relative;
}
.background-layer {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, .5);
  z-index: 5;
  transition-property: background;
  transition-duration: .1s;
}
.prevent-scroll {
  height: 100vh;
  overflow-y: hidden;
}
.menu-button {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 5;
  &:focus {
    outline: none !important;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
}
.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 5;
}
.drawer {
  position: fixed;
  left: -75%;
  top: 0px;
  width: 75%;
  background-color: $primary;
  color: $secondary;
  height: 100vh;
}
.drawer-open {
  left: 0;
  transition-property: left;
  transition-duration: .1s;
}
.page-container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}

// SECTION
.section {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
}
.top-section {
  padding-top: 100px;
}
.section-title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
}
.section-text {
  max-width: 800px;
  margin: auto;
}
.dark {
  background-color: $primary;
  color: $secondary;
}
.light {
  background-color: $secondary;
  color: $primary;
}

.round-image {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

@media (min-width: 1000px) {
  .menu-button, .back-button{
    display: none;
  }
}

</style>
