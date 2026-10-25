
const WHATSAPP_NUMBER = "918147764411";

const form = document.querySelector("#enquiry-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const type = document.querySelector("#shoot-type").value;
    const date = document.querySelector("#event-date").value;
    const details = document.querySelector("#details").value.trim();

    const message =
      `Hello EGALE CLICKS STUDIO!\n` +
      `Name: ${name}\n` +
      `Shoot: ${type}\n` +
      `Event date: ${date || "Not decided"}\n` +
      `Details: ${details}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
}
