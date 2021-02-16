import axios from "axios"



const service = axios.create({
    baseURL:`https://lichess.org`,
  });


  const errHandler = err => {
    console.error(err)
    if (err.response && err.response.data) {
      console.error("API response", err.response.data)
      throw err.response.data.message
    }
    throw err
  };

  export default {
      service: service,
      /* Validate FE data before submitting game */
      getGameData(id) {
        return service
        .get(`/game/export/${id}`)
        .then(res => res.data)
        .catch(errHandler)
  }
}
