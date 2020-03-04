<template>
  <div class="paper-background">

    <h3 class="section-title">Publications</h3>
    <div class="section-text">
      <div class="publication-box">
        <div class="left">
          <img src="@/assets/images/ali-17.jpg" alt="surgence-18" width="100px">
        </div>
        <div class="right">
          <b>Revue de l'Association Lacanienne Internationale</b>
          <br>
          N°17 / 1995 Psychanalyse de l'enfant - "Construction d'un psychodrame en institution"
          <br>
          Abonnement
        </div>
      </div>
      
      <div class="publication-box">
        <div class="left">
          <img src="@/assets/images/surgence-18.png" alt="surgence-18" width="100px">
        </div>
        <div class="right">
          <b>Surgence - Revue de la Libre Association Freudienne</b>
          <br>
          N°3 / Automne 2009 - "Sujet de l'institution, sujet dans l'institution"
          <br>
          N°11 / Automne 2013 - "J'sais pas c'qui m'a pris" Sur la question de la récidive
          <br>
          N°15 / Automne 2016 - "Chabatz d'entrar" Au sujet d'une institution congruente aux enfants dans le champ de la psychanalyse. En collaboration avec Laetitia Aucharles
          <br>
          N°18 / Hiver 2019 - "Le psychodrame psychanalytique individuel en groupe comme Vitz" En collaboration avec Laetitia Aucharles et Marie-Noëlle Lim    
          <br>
          Abonnement
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.drive-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: $primary;
  text-align: center;
  margin: auto;
  // background-color: rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  padding: 10px;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  i {
    margin-right: 10px;
  }
  &:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
}
.publication-box {
  margin-bottom: 30px;
  display: flex;
  .right {
    padding-left: 20px;
  }
}
</style>
