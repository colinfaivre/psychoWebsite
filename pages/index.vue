<template>
  <div id="top">
    <Main class="main"/>
    <Parcours id="parcours" class="section dark"/>
    <Associations id="associations" class="section light"/>
    <Formations id="formations" class="section dark"/>
    <Publications id="publications" class="section light"/>
    <Cabinet id="cabinet" class="section dark"/>
    <Office id="office" class="dark"/>
    <Map id="map" class="dark"/>
  </div>
</template>

<script>
import Main from '@/components/Main'
import Parcours from '@/components/Parcours'
import Associations from '@/components/Associations'
import Formations from '@/components/Formations'
import Publications from '@/components/Publications'
import Cabinet from '@/components/Cabinet'
import Office from '@/components/Office'
import Map from '@/components/Map'

export default {
  data () {
    return {
    }
  },
  computed: {
    menuIsOpen() {
      return this.$store.state.menuIsOpen
    }
  },
  methods: {
  },
  components: {
    Main,
    Parcours,
    Associations,
    Formations,
    Publications,
    Office,
    Cabinet,
    Map,
  },
}
</script>

<style lang="scss">

</style>
