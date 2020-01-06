<template>
  <div class="footer">
    <i class="material-icons">
      phone
    </i>
    <i class="material-icons">
      mail
    </i>
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
