<template>
  <div class="paper-background-grey">
   
    <h3 class="section-title">Formations</h3>
    <p class="section-text">
      Une formation au "Devenir psychodramatiste" est en cours. Dans ce cadre et pour fonder une légitimité à cette formation qualifiante nous avons fondé le Collège Nouvelle Aquitaine et Limousin de Formation Analytique au Psychodrame
      en filiation et avec l'accord du fondateur du CFAP. Nous sommes dans ce cadre habilités à délivrer des attestation de fin de formation.
      <br><br>
    </p>
    <a
      href="https://docs.google.com/document/d/1KDYCaB-S70SrrIS-wyAEFvgNC9x9GPw1iUM5hcpQ97I/edit"
      target="_blank"
      class="drive-link"
    >
      <i class="material-icons">
        insert_drive_file
      </i>
      Devenir psychodramatiste
    </a>
    <br><br><br>

    <h3 class="section-title">Séminaires</h3>
    <p class="section-text">
      Dans le cadre de la Libre Association Freudienne à Limoges, deux séminaires par mois sont tenus le samedi de 10h à 12h.
      L'un est actuellement consacré à "L'interprétation du rêve" de Sigmund Freud et le deuxième est consacré au séminaire de Jacques Lacan "Le transfert".
    </p>

    <br><br>

    <div class="section-text">
      <div class="formation-box">
        <div class="left">
          <img src="@/assets/images/freud.png" alt="freud" width="100px">
        </div>
        <div class="right">
          "L'interprétation du rêve" de Sigmund Freud
          <br>
          inscription
        </div>
      </div>

      <div class="formation-box">
        <div class="left">
          <img src="@/assets/images/lacan.png" alt="lacan" width="100px">
        </div>
        <div class="right">
          Séminaire de Jacques Lacan "Le transfert"
          <br>
          inscription
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
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
  max-width: 400px;
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

.formation-box {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  .right {
    padding-left: 20px;
  }
}
</style>
