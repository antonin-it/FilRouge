// Galerie
let gallery = document.getElementById("gallery");

const resetGallery = () => {
  gallery.innerHTML = "";
};

const getImages = () => {
  let nbImages = 9;
  console.log(window.screen.width);

  if (window.screen.width >= 768) {
    nbImages = 15;
  }
  resetGallery();
  for (let i = 1; i <= nbImages; i++) {
    let img = document.createElement("img");
    img.src = `https://picsum.photos/seed/${i * Math.random() ** 64}/200/`;
    img.alt = `Image ${i}`;
    gallery.appendChild(img);
  }
};
getImages();

// Navigation
let navButtons = document.querySelectorAll("#nav-buttons li");

navButtons.forEach((b) => {
  b.addEventListener("click", () => {
    navButtons.forEach((btn) => btn.classList.remove("active"));
    b.classList.add("active");
    getImages();
  });
});

// Theme
const themeToggle = document.getElementById("theme");

const changeTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--highlight", "#1cd59e");
    document.documentElement.style.setProperty("--background", "#041821");
    document.documentElement.style.setProperty("--text", "#fefefe");
    document.documentElement.style.setProperty("--text2", "#49575e");
  } else {
    document.documentElement.style.setProperty("--highlight", "#1cd59e");
    document.documentElement.style.setProperty("--background", "#fefefe");
    document.documentElement.style.setProperty("--text", "#041821");
    document.documentElement.style.setProperty("--text2", "#49575e");
  }
};

themeToggle.addEventListener("click", () => {
  if (themeToggle.classList.contains("dark")) {
    themeToggle.classList.remove("dark");
    themeToggle.classList.add("light");
    changeTheme("light");
  } else {
    themeToggle.classList.remove("light");
    themeToggle.classList.add("dark");
    changeTheme("dark");
  }
});
