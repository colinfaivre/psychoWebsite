<template>
  <div class="paper-background-grey">

    <h3 class="section-title">Formations</h3>
    <p class="section-text">
      J'ai, avec quelques collègues fondé le <b>"Collège Nouvelle Aquitaine et Limousin de Formation Analytique au Psychodrame"</b>.
      Cette création s'est faite en filiation et avec l'accord et le soutien du fondateur du <b>CFAP</b>.
      Nous sommes dans ce cadre habilités à délivrer des attestations de fin de formation.
      <br>
      C'est ce nouveau Collège qui légitime qu'une formation <b>"Devenir Psychodramatiste"</b> qualifiante soit tenue à Limoges.
      <br><br><br>
    </p>
    <a
      href="https://docs.google.com/document/d/1KDYCaB-S70SrrIS-wyAEFvgNC9x9GPw1iUM5hcpQ97I/edit"
      target="_blank"
      rel="noopener noreferrer"
      class="drive-link"
    >
      <i class="material-icons">
        insert_drive_file
      </i>
      Devenir psychodramatiste
    </a>
    <br><br><br>

    <p class="section-text">
      Dans le cadre de la Libre Association Freudienne, deux séminaires sont tenus le samedi matin de 10h à 12h.
      L'un des séminaires est consacré au séminaire de Jacques Lacan: "Le Transfert".
      Depuis septembre 2021 un nouveau séminaire est est tenu, consacré au concept psychanalytique élaboré dans un premier temps par Gabriel Balbo et Jean Bergès et auquel Gabriel Balbo a su donner toute son importance dans sa conception de la psychanalyse: "Le Transitivisme".
    </p>

    <br><br>

    <div class="section-text">
      <div class="formation-box">
        <div class="left">
          <img src="@/assets/images/lacan.png" alt="Lacan" width="100px">
        </div>
        <div class="right">
          <div>
            Séminaire de Jacques Lacan "Le Transfert"
          </div>
          <br>
          <a class="link" href="mailto:jeanyves.gauthier.gr.travail@gmail.com" target="_blank" rel="noopener noreferrer">
            inscription
          </a>
        </div>
      </div>

      <div class="formation-box">
        <div class="left">
          <img src="@/assets/images/balbo.png" alt="Balbo" width="100px">
        </div>
        <div class="right">
          <div>
            Séminaire de Gabriel Balbo "Le Transitivisme"
          </div>
          <br>
          <a class="link" href="mailto:jeanyves.gauthier.gr.travail@gmail.com" target="_blank" rel="noopener noreferrer">
            inscription
          </a>
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
  padding: 5px;
  border-radius: 60px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  img {
    display: block;
  }
  .right {
    padding-left: 20px;
    .link {
      background-color: rgb(68, 68, 68);
      padding: 5px;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 5px;
    }
  }
}
</style>
