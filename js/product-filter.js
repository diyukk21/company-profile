document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(
    ".product-filter-btn[data-product-filter]"
  );
  const productCards = document.querySelectorAll(".product-card[data-category]");
  const filterWrap = document.querySelector(".product-filter-wrap");
  const filterIndicator = document.querySelector(
    ".product-filter-indicator"
  );

  const moveFilterIndicator = (button) => {
    if (!filterWrap || !filterIndicator || !button) return;
    filterIndicator.style.width = `${button.offsetWidth}px`;
    filterIndicator.style.transform = `translateX(${button.offsetLeft}px)`;
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.productFilter;
      if (!selectedCategory) return;

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

  const getActiveButton = () =>
    document.querySelector(".product-filter-btn.active[data-product-filter]");
  moveFilterIndicator(getActiveButton());
  window.addEventListener("resize", () => moveFilterIndicator(getActiveButton()), {
    passive: true,
  });
});
