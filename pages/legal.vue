<template>
  <div class="top-section section light">
    <div class="section-title">
      Mentions légales
    </div>
    <p class="section-text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris leo quam, placerat sed interdum in, elementum sit amet neque. Proin nisl sem, faucibus in vehicula id, cursus nec est. Integer vestibulum vehicula diam quis maximus. Sed lacinia malesuada fermentum. Aenean faucibus, risus eu tempor mollis, magna libero varius diam, vitae tincidunt dolor ante et ipsum. Donec vel leo sem. Sed fringilla iaculis fringilla. Nunc eros nisi, malesuada ut eros eget, malesuada auctor lectus. Suspendisse pulvinar ultricies diam, at pellentesque sem euismod id.
    </p>
  </div>
</template>

<script>
import Main from '@/components/Main'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Hours from '@/components/Hours'
import Office from '@/components/Office'
import Map from '@/components/Map'
import Footer from '@/components/Footer'

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
    Footer,
  },
}
</script>

<style lang="scss">

</style>
