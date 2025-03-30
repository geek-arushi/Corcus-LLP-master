export default function loadBackgroudImages() {
  let backgroudImages = document.querySelectorAll("[data-background]");

  if (backgroudImages.length > 0) {
    backgroudImages.forEach((element) => {
      let image = element.dataset.background;
      // Handle relative paths correctly in production
      if (image.startsWith("/")) {
        image = "." + image;
      }
      element.style.backgroundImage = `url('${image}')`;
    });
  }
}
