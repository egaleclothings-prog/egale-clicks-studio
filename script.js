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

const placeGallery = document.querySelector("#place-cards");

const placeDetails = {
  Bengaluru: [
    {
      name: "Lalbagh Botanical Garden",
      info: "Nature and pre-wedding photography location.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    },
    {
      name: "Cubbon Park",
      info: "Beautiful green surroundings for portraits.",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8"
    },
    {
      name: "Bangalore Palace",
      info: "Royal architecture and premium portraits.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23"
    }
  ],

  Mysuru: [
    {
      name: "Mysore Palace",
      info: "Royal architecture and traditional photography.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742"
    },
    {
      name: "Brindavan Gardens",
      info: "Garden and couple photography.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    }
  ],

  Mangaluru: [
    {
      name: "Tannirbhavi Beach",
      info: "Beach and sunset photography.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21"
    },
    {
      name: "Panambur Beach",
      info: "Beautiful coastal photography.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      name: "Sultan Battery",
      info: "Historic waterfront location.",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
    }
  ]
};

function showPlaceCards(city) {
  if (!placeGallery) return;

  placeGallery.innerHTML = "";

  const places = placeDetails[city] || [];

  places.forEach(place => {
    const card = document.createElement("div");

    card.style.cssText =
      "background:#111;border:1px solid #d8b56d;border-radius:14px;padding:12px;margin:12px 0;color:#fff;";

    const img = document.createElement("img");
    img.src = place.image;
    img.alt = place.name;
    img.style.cssText =
      "width:100%;height:180px;object-fit:cover;border-radius:10px;";

    const title = document.createElement("h3");
    title.textContent = place.name;
    title.style.color = "#d8b56d";

    const info = document.createElement("p");
    info.textContent = place.info;

    const btn = document.createElement("button");
    btn.textContent = "Select Location";
    btn.style.cssText =
      "background:#d8b56d;color:#111;padding:12px;border:0;border-radius:6px;width:100%;font-weight:bold;";

    btn.addEventListener("click", () => {
      placeSelect.value = place.name;
      placeSelect.dispatchEvent(new Event("change"));
    });

    card.append(img, title, info, btn);
    placeGallery.appendChild(card);
  });
}

if (citySelect) {
  citySelect.addEventListener("change", () => {
    showPlaceCards(citySelect.value);
  });

  showPlaceCards(citySelect.value);
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
