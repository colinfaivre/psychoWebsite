<template>
  <a class="button--action" href="tel:+33681754218">
    <i class="material-icons">
      phone
    </i>
    PRENDRE RDV
  </a>
</template>

<style lang="scss">
.button--action {
  font-family: 'Roboto', serif;
  font-weight: 500;
  border-radius: 4px;
  border: 0px;
  text-decoration: none;
  padding: 10px 30px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  max-width: 400px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: $primary;
  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  .material-icons{
    padding-right: 10px;
  }
}
</style>
