<template>
  <div class="paper-background">

    <h3 class="section-title">Publications</h3>

    <div class="section-text">

      <div class="publications-title">
        <b class="center">Revue de l'Association Freudienne</b>
      </div>
      <PublicationBox :publicationData="publicationFreudienne"/>
      
      <br>
      <br>
      
      <div class="publications-title">
        <b>Revue de la Libre Association Freudienne - Surgence</b>
      </div>
      <PublicationBox v-for="publication in publications" :key="publication.index" :publicationData="publication"/>

    </div>
  </div>
</template>

<script>
import PublicationBox from '@/components/PublicationBox'

export default {
  components: {
    PublicationBox
  },
  data () {
    return {
      publicationFreudienne: {
        number: 17,
        date: "1995",
        content: `Psychanalyse de l'enfant - "Construction d'un psychodrame en institution"`,
        image: "ali-17.jpg"
      },
      publications: [
        {
          number: 3,
          date: "Automne 2009",
          content: `"Sujet de l'institution, sujet dans l'institution"`,
          image: "surgence-18.png"
        },
        {
          number: 11,
          date: "Automne 2013",
          content: `"J'sais pas c'qui m'a pris" Sur la question de la récidive`,
          image: "surgence-18.png"
        },
        {
          number: 15,
          date: "Automne 2016",
          content: `"Chabatz d'entrar" Au sujet d'une institution congruente aux enfants dans le champ de la psychanalyse. En collaboration avec Laetitia Aucharles`,
          image: "surgence-18.png"
        },
        {
          number: 18,
          date: "Hiver 2019",
          content: `"Le psychodrame psychanalytique individuel en groupe comme Vitz" En collaboration avec Laetitia Aucharles et Marie-Noëlle Lim`,
          image: "surgence-18.png"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.publications-title {
  text-align: center;
  margin-bottom: 10px;
}
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
