import axios from 'axios';

const apiBaseUrl = 'http://localhost:3000/api/'

export const postOrdonnance = (speciality, pathology, clinicalP, Recommandation) =>{
  console.log("tag");
  axios.post(apiBaseUrl + 'Ordonnances', {
      speciality: speciality,
      pathology: pathology,
      clinicalPresentation: clinicalP,
      Recommandation: Recommandation,
  }).then((response) => response.data)
}
