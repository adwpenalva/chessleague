import axios from "axios"



const service = axios.create({
    baseURL:`https://lichess.org`,
    headers:  {
            "Accept": "application/json" 
          }
    }
  );

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
        .then(res => res)
        .catch(errHandler)
  }
}
