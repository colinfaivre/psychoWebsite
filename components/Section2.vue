<template>
  <div>
    <h3 class="section-title">Associations</h3>
    <p class="section-text">
      J'exerce la Psychanalyse en libéral dans le cadre de mon cabinet au 34 de la rue Venassier à Limoges.
      Depuis sa création en 2005, je suis membre de la Libre Association Freudienne créée par le psychanalyste Gabriel Balbo (auteur de nombreux ouvrages avec son ami Jean Bergès)
      école d'orientation Lacanienne.
      Psychodramatiste, je suis membre du Collège de Formation Analytique au Psychodrame.
      A ce titre je suis habilité à tenir des groupes de formation au "devenir psychodramatiste". Une formation est actuellement en cours depuis janvier 2017 pour une durée de trois années à raison de 27 demi-journées (le samedi matin) et trois journées scientifiques; le groupe est ouvert et chacun peut intégrer la formation selon sa disponibilité.
      Inscrit comme superviseur sur la liste des superviseurs du site de "psychasoc" créé par le psychanalyste Joseph Rouzel, j'intervient dans le cadre de supervisions d'équipes dans des institutions sociales et médicales, voire des entreprises.
    </p>
    <div class="round-image">
      <img src="@/assets/images/freud.png" alt="freud" width="100px">
    </div>
    <h3 class="section-title">Formations</h3>

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
</style>
