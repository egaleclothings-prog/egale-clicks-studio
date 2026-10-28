// EGALE CLICKS STUDIO — booking form and city-specific shoot locations
const WHATSAPP_NUMBER = "918147764411";

const form = document.querySelector("#booking-form");
const citySelect = document.querySelector("#city");
const placeSelect = document.querySelector("#place");
const statusMessage = document.querySelector("#form-status");

const famousPlaces = {
  Bengaluru: ["Lalbagh Botanical Garden", "Cubbon Park", "Bangalore Palace", "Vidhana Soudha", "Nandi Hills (near Bengaluru)", "Other location"],
  Mysuru: ["Mysore Palace", "Brindavan Gardens", "Chamundi Hills", "St. Philomena's Church", "Other location"],
  Mangaluru: ["Panambur Beach", "Tannirbhavi Beach", "Sultan Battery", "Pilikula", "Other location"],
  Hubballi: ["Unkal Lake", "Nrupatunga Betta", "Other location"],
  Belagavi: ["Belgaum Fort", "Kamal Basti", "Rakaskop", "Other location"],
  Kalaburagi: ["Gulbarga Fort", "Buddha Vihar", "Sharana Basaveshwara Temple", "Other location"],
  Yadgir: ["Yadgir Fort", "Sannati", "Other location"],
  Other: ["Other location — share details in message"]
};

if (citySelect && placeSelect) {
  citySelect.addEventListener("change", () => {
    const places = famousPlaces[citySelect.value] || [];
    placeSelect.innerHTML = "";

    const firstOption = document.createElement("option");
    firstOption.value = "";
    firstOption.textContent = places.length ? "Choose a shoot location" : "First select a city";
    placeSelect.appendChild(firstOption);

    places.forEach((place) => {
      const option = document.createElement("option");
      option.value = place;
      option.textContent = place;
      placeSelect.appendChild(option);
    });

    placeSelect.disabled = places.length === 0;
    if (statusMessage) statusMessage.textContent = "";
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const type = document.querySelector("#event").value;
    const city = citySelect.value;
    const place = placeSelect.value;
    const date = document.querySelector("#date").value;
    const details = document.querySelector("#message").value.trim();

    if (!name || !type || !city || !place) {
      if (statusMessage) statusMessage.textContent = "Please fill in your name, shoot type, city and location.";
      return;
    }

    const message = [
      "Hello EGALE CLICKS STUDIO! I'd like to enquire about a shoot.",
      "",
      `Name: ${name}`,
      `Shoot type: ${type}`,
      `City: ${city}`,
      `Shoot location: ${place}`,
      `Event date: ${date || "Not decided yet"}`,
      `Details: ${details || "No extra details yet"}`
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    if (statusMessage) statusMessage.textContent = "WhatsApp opened. Please review the enquiry and press Send.";
  });
}

const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
