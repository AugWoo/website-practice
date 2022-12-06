let suggestions = [];
const loadData = async () => {
  const json = await (
    await fetch(
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
    )
  ).json();
  json.forEach((data) => suggestions.push(data.city));
};

loadData();
