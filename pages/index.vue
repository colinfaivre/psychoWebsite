<template>
  <div id="top">
    <Main class="light"/>
    <Section1 id="section1" class="section dark"/>
    <Section2 id="section2" class="section light"/>
    <Hours id="hours" class="section dark"/>
    <Office id="office"/>
    <Map id="map"/>
  </div>
</template>

<script>
import Main from '@/components/Main'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Hours from '@/components/Hours'
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
    Section1,
    Section2,
    Office,
    Hours,
    Map,
  },
}
</script>

<style lang="scss">

</style>
