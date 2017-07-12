import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/api/'

export const postOrdonnance = (speciality, pathology, clinicalP, Recommandation, id, router) =>{
  console.log("tag");
  axios.post(apiBaseUrl + 'Ordonnances', {
      speciality: speciality,
      pathology: pathology,
      clinicalPresentation: clinicalP,
      Recommandation: Recommandation,
  }).then((response) => {
  	console.log("fin tag");
  	id = response.data.id;
  	router.push("/ordonnance/" + id + "/molecules");
  });
}
