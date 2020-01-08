<template>
  <div id="top" class="container">
    <Menu class="menu"/>
    <Main />

    <Section1 class="section dark"/>
    <Section2 class="section light"/>
    <Hours class="section dark"/>
    <Office/>
    <Map class="section light"/>
    <Footer id="footer" class="dark"/>
  </div>
</template>

<script>
import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(vueSmoothScroll)

import Menu from '@/components/Menu'
import Main from '@/components/Main'
import Button from '@/components/Button'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Hours from '@/components/Hours'
import Office from '@/components/Office'
import Map from '@/components/Map'
import Footer from '@/components/Footer'
export default {
  components: {
    Menu,
    Main,
    Button,
    Section1,
    Section2,
    Office,
    Hours,
    Map,
    Footer,
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
}

.section {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 15px;
  padding-right: 15px;
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
.menu {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>
