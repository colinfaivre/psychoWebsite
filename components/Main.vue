<template>
  <div class="main-screen">
    <div class="top">
      <h1 class="title">
        Jean-Yves
        <br>
        Gauthier
      </h1>

      <h2 class="subtitle">
        Psychanalyste
        <br>
        Psychologue clinicien
      </h2>
    </div>
    <div class="bottom">
      <Button/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
export default {
  components: {
    Button,
  }
}
</script>

<style lang="scss">
.main-screen {
  padding-left: 10px;
  padding-right: 10px;
}

.top {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 90vh;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  min-height: 10vh;
}

.title {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 1px;
  line-height: 45px;
}
.subtitle {
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 23px;
  line-height: 30px;
  padding-top: 20px;
}
</style>
