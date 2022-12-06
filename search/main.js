const searchInput = document.querySelector('.search');
const list = document.querySelector('.list');
const data = [];

const loadData = async () => {
  const json = await (
    await fetch(
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    )
  ).json();
  data.push(...json);
  console.log(data);
};
loadData();

function findMatches(word, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayInputValue(e) {
  e.preventDefault();
  const matchedArray = findMatches(e.target.value, data);
  matchedArray.forEach((cities) => {});
}

searchInput.addEventListener('change', displayInputValue);
// searchInput.addEventListener('keyup', displayInputValue);
