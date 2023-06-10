function getData() {
  return fetch("https://api.rjs.dev/api/v1/landing-page")
    .then((res) => res.json())
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return {};
    });
}
