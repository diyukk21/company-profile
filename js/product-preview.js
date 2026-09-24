document.addEventListener("DOMContentLoaded", () => {
  const modalImage = document.querySelector("#modalProductImage");
  const modalTitle = document.querySelector("#modalProductTitle");
  const modalDescription = document.querySelector("#modalProductDescription");
  const modalDetails = document.querySelector("#modalProductDetails");

  document.querySelectorAll(".product-preview-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (modalImage) {
        if (button.dataset.image) modalImage.src = button.dataset.image;
        modalImage.alt = button.dataset.title || "Preview produk";
      }
      if (modalTitle) modalTitle.textContent = button.dataset.title || "";
      if (modalDescription) {
        modalDescription.textContent = button.dataset.description || "";
      }
      if (modalDetails) modalDetails.textContent = button.dataset.details || "";
    });
  });
});
