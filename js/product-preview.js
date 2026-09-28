document.addEventListener("DOMContentLoaded", () => {
  const modalImage = document.querySelector("#modalProductImage");
  const modalTitle = document.querySelector("#modalProductTitle");
  const modalDescription = document.querySelector("#modalProductDescription");
  const modalDetails = document.querySelector("#modalProductDetails");

  document.querySelectorAll(".product-preview-btn").forEach((button) => {
    button.addEventListener("click", () => {
      modalImage.src = button.dataset.image || "";
      modalImage.alt = button.dataset.title || "Preview produk";
      modalTitle.textContent = button.dataset.title || "";
      modalDescription.textContent = button.dataset.description || "";
      modalDetails.textContent = button.dataset.details || "";

      document.addEventListener("click", (e) => {
  const whatsappLink = e.target.closest(
    'a[href^="https://wa.me/"]'
  );

  if (whatsappLink) {
    e.preventDefault();
    window.open(
      whatsappLink.href,
      "_blank",
      "noopener,noreferrer"
    );
  }
});
    });
  });
});
