import { renderCards } from "./cards.js";

const API_URL = "https://veryfast.io/t/front_test_api.php";

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    renderCards(data.result.elements);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
