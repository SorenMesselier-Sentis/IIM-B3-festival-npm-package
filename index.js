function getAllFestivalData() {
  fetch(
    "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=20"
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        console.log(record.fields);
      });
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

function getAllFestivalCities() {
  fetch(
    "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut"
  )
    .then((response) => response.json())
    .then((data) => {
      data.records.forEach((record) => {
        console.log(record.fields.commune_principale);
      });
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

function getAllFestivalActualMusic() {
  fetch(
    "https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=20&refine.domaine=Musiques%20actuelles"
  )
    .then((response) => response.json())
    .then((data) =>
      data.records.forEach((record) => {
        console.log(record.fields.nom_de_la_manifestation + "(" + record.fields.commune_principale + ")");
      })
    )
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

module.exports = {
  getAllFestivalData,
  getAllFestivalCities,
  getAllFestivalActualMusic,
};
