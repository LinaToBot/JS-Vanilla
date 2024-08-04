const API = "https://rickandmortyapi.com/api/character/";

const getData = async (id) => {
  // que peticion estamos haciendo, con el id del personaje o todos los personajes
  const apiURL = id ? `${API}${id}` : API;
  // llamaodf al fetch
  try {
    // response hace le llamado al fetch
    const response = await fetch(apiURL);
    // convertir a obj json iterable
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch error", error);
  }
};

export default getData;
