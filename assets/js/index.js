let gallery = document.getElementById("gallery");

for (let i = 1; i <= 15; i++) {
  let img = document.createElement("img");
  img.src = `https://picsum.photos/seed/${i * Math.random() ** 64}/200/`;
  img.alt = `Image ${i}`;
  gallery.appendChild(img);
}

let navButtons = document.querySelectorAll("#nav-buttons li");

navButtons.forEach((b) => {
  b.addEventListener("click", () => {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    b.classList.add("active");
  });
});
