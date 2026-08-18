document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(
    "[data-product-filter], [data-filter]"
  );
  const productCards = document.querySelectorAll(
    ".product-card[data-category], .product-item[data-category]"
  );
  const filterWrap = document.querySelector(".product-filter-wrap");
  const filterIndicator = document.querySelector(
    ".product-filter-indicator, .product-filter-slider"
  );

  const moveFilterIndicator = (button) => {
    if (!filterWrap || !filterIndicator || !button) return;
    filterIndicator.style.width = `${button.offsetWidth}px`;
    filterIndicator.style.transform = `translateX(${button.offsetLeft}px)`;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.productFilter || button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      productCards.forEach((card) => {
        const shouldShow =
          selectedCategory === "all" ||
          card.dataset.category === selectedCategory;
        card.classList.toggle("d-none", !shouldShow);
      });

      moveFilterIndicator(button);
    });
  });

  moveFilterIndicator(document.querySelector(".product-filter-btn.active"));
  window.addEventListener("resize", () => {
    moveFilterIndicator(document.querySelector(".product-filter-btn.active"));
  });
});
