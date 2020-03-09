<template>
  <div class="paper-background">

    <h3 class="section-title">Publications</h3>

    <div class="section-text">

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
      publications: [
        {
          bookName: "La Psychanalyse de l'enfant",
          number: 17,
          title: "Théorie et pratiques aujourd'hui",
          date: "1995",
          content: `"Construction d'un psychodrame en institution"`,
          image: "ali-17.jpg",
          link: "https://www.freud-lacan.com/getpagedocument/27442",
          authors: [
            "Jean-Yves Gauthier"
          ]
        },
        {
          bookName: "Surgence",
          number: 3,
          title: "Le Sujet est-il négociable dans l'Institution",
          date: "2009",
          content: `"Sujet de l'institution, sujet dans l'institution"`,
          image: "surgence-3.png",
          link: "https://libre-association-freudienne.org/3-le-sujet-est-il-negociable-dans-linstitution",
          authors: [
            "Jean-Yves Gauthier"
          ]
        },
        {
          bookName: "Surgence",
          number: 11,
          title: "L'abord de la récidive n'est-il qu'Hors sujet ?",
          date: "2013",
          content: `"J'sais pas c'qui m'a pris" Sur la question de la récidive`,
          image: "surgence-11.png",
          link: "https://libre-association-freudienne.org/11-l-abord-de-la-recidive-n-est-il-qu-hors-sujet",
          authors: [
            "Jean-Yves Gauthier"
          ]
        },
        {
          bookName: "Surgence",
          number: 15,
          title: "Que serait une institution de soin congruente, dans le champ de la psychanalyse ?",
          date: "2016",
          content: `"Chabatz d'entrar" Au sujet d'une institution congruente aux enfants dans le champ de la psychanalyse`,
          image: "surgence-15.png",
          link: "https://libre-association-freudienne.org/n-15-que-serait-une-institution-de-soin-congruente-dans-le-champ-de-la-psychanalyse",
          authors: [
            "Jean-Yves Gauthier",
            "Laetitia Aucharles"
          ]
        },
        {
          bookName: "Surgence",
          number: 18,
          title: "Le Witz",
          date: "2019",
          content: `"Le psychodrame psychanalytique individuel en groupe comme Witz"`,
          image: "surgence-18.png",
          link: "https://libre-association-freudienne.org/n-18-le-witz",
          authors: [
            "Jean-Yves Gauthier",
            "Laetitia Aucharles",
            "Marie-Noëlle Lim"
          ]
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
