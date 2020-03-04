<template>
  <div :class="{'app': true, 'prevent-scroll': menuIsOpen}">
    <BackButton class="back-button" v-if="$nuxt.$route.path !== '/'"/>
    <MenuButton class="menu-button" />

    <NavBar class="nav-bar" />
    <Drawer :class="{'drawer':true,'dark':true, 'drawer-open': menuIsOpen}" />
    <div
      @click="closeMenu()"
      :class="{'background-layer': menuIsOpen}"
    />
    <nuxt class="page-container"/>
    <Footer id="footer" class="dark"/>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'
import MenuButton from '@/components/MenuButton'
import NavBar from '@/components/NavBar'
import Drawer from '@/components/Drawer'
import Footer from '@/components/Footer'

export default {
  components: {
    Drawer,
    BackButton,
    MenuButton,
    NavBar,
    Footer,
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
// General
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
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
 -webkit-tap-highlight-color: transparent;
 -webkit-user-select: none;
 -khtml-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
  user-select: none;
}
a {
  text-decoration: none;
  color: inherit;
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
.nav-bar {
  position: absolute;
  top: 10px;
  left: 15px;
  z-index: 5;
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

// SECTIONS STYLES
.section {
  padding-top: 50px;
  padding-bottom: 70px;
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
  margin-bottom: 50px;
}
.section-text {
  max-width: 600px;
  font-size: 18px;
  margin: auto;
}
.dark {
  background-color: $primary;
  color: $secondary;
  background: url("~assets/images/paper-background-dark-grey.jpg");
  background-size: cover;
}
.light {
  background-color: $secondary;
  color: $primary;
  background: url("~assets/images/paper-background.png");
  background-size: cover;
}

.round-image {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 15px;
}


@media (max-width: $tablet) {
  .nav-bar {
    display: none;
  }
}
@media (min-width: $tablet) {
  .menu-button, .back-button{
    display: none;
  }
}

</style>
