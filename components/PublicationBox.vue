<template>
  <div class="publication-box">
    <div class="left">
      <img :src="require('@/assets/images/' + publicationData.image)" width="130px">
    </div>
    <div class="right">
      <div class="header">
        <div class="header-left">
          <b>{{publicationData.bookName}} N°{{ publicationData.number }}</b>
        </div>
        <div class="header-right">
          <span class="date">{{ publicationData.date }}</span>
        </div>
      </div>
      <div>
        <div class="title">
          {{ publicationData.title }}
        </div>
        <div class="content">
          {{ publicationData.content }}
        </div>
      </div>
      <div class="footer">
        <div class="footer-left">
          <div v-for="author in publicationData.authors" :key="author.index" class="authors">
            {{ author }}
          </div>
        </div>
        <div class="footer-right">
          <a class="publication-link" :href="publicationData.link" target="_blank">
            <i class="material-icons">
              arrow_forward
            </i>
          </a>
        </div>
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
    width: 100%;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
      display: flex;
      justify-content: space-between;
    }
    .date {
      color: grey;
    }
    .title {
      font-weight: bold;
    }
    .content {
      margin-top: 5px;
    }
  }
  .footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .authors {
    color: grey;
  }
  .publication-link {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary;
    border-radius: 20px;
    height: 40px;
    width: 40px;
    color: white;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
}
</style>
