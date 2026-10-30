const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  }),
);
document.getElementById("quoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const subject = encodeURIComponent(
    `Freight quote: ${d.get("origin")} to ${d.get("destination")}`,
  );
  const body = encodeURIComponent(
    `Hello Perkin Logistics,\n\nPlease quote the following shipment:\n\nName: ${d.get("name")}\nCompany: ${d.get("company")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nOrigin: ${d.get("origin")}\nDestination: ${d.get("destination")}\nMode: ${d.get("mode")}\nWeight: ${d.get("weight")}\nDetails: ${d.get("details")}\n\nThank you.`,
  );
  document.querySelector(".toast").classList.add("show");
  setTimeout(
    () => document.querySelector(".toast").classList.remove("show"),
    4000,
  );
  window.location.href = `mailto:info@perkin-logistics.com?subject=${subject}&body=${body}`;
});
