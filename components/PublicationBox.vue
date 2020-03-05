<template>
  <div class="publication-box">
    <div class="left">
      <img :src="require('@/assets/images/' + publicationData.image)" width="120px">
    </div>
    <div class="right">
      <b>N°{{ publicationData.number }}</b> {{ publicationData.date }}
      <div class="content">
        {{ publicationData.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'publicationData'
  ],
  data () {
    return {}
  },
}
</script>

<style lang="scss">
.publication-box {
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  img {
    display: block;
  }
  .right {
    padding-left: 10px;
    padding-right: 10px;
    .content {
      margin-top: 5px;
    }
  }
}
</style>
