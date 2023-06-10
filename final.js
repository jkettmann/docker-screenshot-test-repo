async function getData() {
  try {
    const response = await fetch("https://api.rjs.dev/api/v1/landing-page");
    const json = await response.json();
    return json.data;
  } catch (err) {
    console.error(err);
    return {};
  }
}
