
const WHATSAPP_NUMBER = "918147764411";

const form = document.querySelector("#enquiry-form");

const citySelect = document.querySelector("#city");
const placeSelect = document.querySelector("#place");

const placesByCity = {
  Bengaluru: [
    "Lalbagh Botanical Garden",
    "Bangalore Palace",
    "Vidhana Soudha",
    "Cubbon Park",
    "Nandi Hills",
    "Other Location"
  ],
  Mysuru: [
    "Mysore Palace",
    "Brindavan Gardens",
    "Chamundi Hills",
    "St. Philomena's Church",
    "Other Location"
  ],
  Mangaluru: [
    "Panambur Beach",
    "Tannirbhavi Beach",
    "Sultan Battery",
    "Other Location"
  ],
  Hubballi: [
    "Unkal Lake",
    "Nrupatunga Betta",
    "Other Location"
  ],
  Belagavi: [
    "Belgaum Fort",
    "Kamal Basti",
    "Other Location"
  ],
  Kalaburagi: [
    "Gulbarga Fort",
    "Buddha Vihar",
    "Other Location"
  ],
  Yadgir: [
    "Yadgir Fort",
    "Sannati",
    "Other Location"
  ],
  Other: [
    "Other Location"
  ]
};

// Update Famous Places when city changes
if (citySelect && placeSelect) {
  citySelect.addEventListener("change", function () {
    const city = citySelect.value;

    placeSelect.innerHTML =
      '<option value="">Choose a famous place</option>';

    const places = placesByCity[city] || [];

    places.forEach(function (place) {
      const option = document.createElement("option");
      option.value = place;
      option.textContent = place;
      placeSelect.appendChild(option);
    });

    placeSelect.disabled = places.length === 0;
  });
}

// WhatsApp booking form
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name =
      document.querySelector("#name")?.value.trim() || "";

    const type =
      document.querySelector("#shoot-type")?.value || "";

    const date =
      document.querySelector("#event-date")?.value || "Not specified";

    const details =
      document.querySelector("#details")?.value.trim() || "";

    const city = citySelect?.value || "";
    const place = placeSelect?.value || "";

    if (!name || !type || !city || !place) {
      alert("Please fill in your name, shoot type, city and place.");
      return;
    }

    const message =
      "Hello EGALE CLICKS STUDIO!%0A%0A" +
      "Name: " + encodeURIComponent(name) + "%0A" +
      "Shoot Type: " + encodeURIComponent(type) + "%0A" +
      "City: " + encodeURIComponent(city) + "%0A" +
      "Famous Place: " + encodeURIComponent(place) + "%0A" +
      "Event Date: " + encodeURIComponent(date) + "%0A" +
      "Details: " + encodeURIComponent(details);

    const whatsappURL =
      "https://wa.me/" + WHATSAPP_NUMBER +
      "?text=" + message;

    window.open(whatsappURL, "_blank");
  });
}

