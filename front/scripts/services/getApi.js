import axios from 'axios';
import querystring from 'querystring';

const apiBaseUrl = 'http://ec2-54-200-64-111.us-west-2.compute.amazonaws.com/api/'

export const postOrdonnance = (speciality, pathology, clinicalP, Recommandation) =>{
  axios.post(apiBaseUrl + 'ordonnance-post', querystring.stringify({
      speciality: speciality,
      pathology: pathology,
      clinicalPresentation: clinicalP,
      Recommandation: Recommandation,
  })).then((response) => {
    console.log(response.data);
  	return response.data;
  });
}
