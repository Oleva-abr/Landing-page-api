export function getClass(data) {
  let additionalClass = "";
  if (data.is_best) {
    additionalClass = "best";
  }
  if (data.price_key === "50%") {
    additionalClass += " " + "sale";
  }

  return additionalClass;
}

export function getPrice(string) {
  const parts = string.split("$");

  // Take the second element after splitting and split it using the '<' character
  const pricePart = parts[1]?.split("<")[0];

  const price = pricePart ? `$${pricePart}` : null;

  return price;
}

export function downloadFile(link) {
  const anchor = document.createElement("a");
  anchor.href = link;
  anchor.click();
}
