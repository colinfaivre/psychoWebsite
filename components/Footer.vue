<template>
  <div class="footer">
    <a href="tel:+33681754218">
      <i class="material-icons">
        phone
      </i>
    </a>
    <a href="mailto:jeanyves.gauthier.gr.travail@gmail.com" target="_blank">
      <i class="material-icons">
        mail
      </i>
    </a>
    <i class="material-icons">
      account_balance
    </i>
  </div>
</template>

<style scoped lang="scss">
.footer {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 10px;
  padding-right: 10px;

  display: flex;
  justify-content: center;
  a {
    color: inherit;
    text-decoration: none;
  }
}
.material-icons {
  margin-left: 14px;
  margin-right: 14px;
  padding: 10px;
  border-radius: 22px;
  cursor: pointer;
  &:hover {
    background-color: $primary-med-light;
  }
}
</style>
