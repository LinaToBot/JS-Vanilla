import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();

  const view = `
    <div class="Characters">
    ${characters.results
      .map(
        (character) => `
          <articule class="Character-item">
              <a href="#/${character.id}/">
                  <img src="${character.image}" alt="${character.name}" />
                  <h2>${character.name}</h2>
              </a>
          </articule>
      `
      )
      .join("")}
    </div>
    `;
  return view;
};

export default Home;
