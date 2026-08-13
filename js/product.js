
document.addEventListener("DOMContentLoaded", () => {
  /* ========================================
     PRODUCT FILTER
  ======================================== */

  const filterButtons = document.querySelectorAll(
    ".product-filter-btn"
  );

  const productItems = document.querySelectorAll(
    ".product-item[data-category]"
  );

  const filterSlider = document.querySelector(
    "#productFilterSlider"
  );

  /**
   * Memindahkan slider putih ke tombol filter aktif.
   */
  const moveFilterSlider = (button) => {
    if (!filterSlider || !button) {
      return;
    }

    filterSlider.style.width = `${button.offsetWidth}px`;
    filterSlider.style.transform = `translateX(${button.offsetLeft}px)`;
  };

  /**
   * Filter produk berdasarkan kategori.
   */
  const filterProducts = (category) => {
    productItems.forEach((item) => {
      const itemCategory = item.dataset.category;

      const shouldShow =
        category === "all" ||
        itemCategory === category;

      item.classList.toggle("d-none", !shouldShow);
    });
  };

  /**
   * Menjalankan filter ketika tombol diklik.
   */
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;

      if (!selectedCategory) {
        return;
      }

      /* Update tombol aktif */
      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;

        filterButton.classList.toggle(
          "active",
          isActive
        );

        filterButton.setAttribute(
          "aria-pressed",
          String(isActive)
        );
      });

      /* Filter produk */
      filterProducts(selectedCategory);

      /* Pindahkan slider */
      moveFilterSlider(button);
    });
  });


  /* ========================================
     INITIAL PRODUCT FILTER
  ======================================== */

  const activeFilterButton = document.querySelector(
    ".product-filter-btn.active"
  );

  if (activeFilterButton) {
    const initialCategory =
      activeFilterButton.dataset.filter;

    if (initialCategory) {
      filterProducts(initialCategory);
      moveFilterSlider(activeFilterButton);

      activeFilterButton.setAttribute(
        "aria-pressed",
        "true"
      );
    }
  }


  /* ========================================
     PRODUCT PREVIEW MODAL
  ======================================== */

  const previewButtons = document.querySelectorAll(
    ".product-preview-btn"
  );

  const modalProductImage = document.querySelector(
    "#modalProductImage"
  );

  const modalProductTitle = document.querySelector(
    "#modalProductTitle"
  );

  const modalProductDescription = document.querySelector(
    "#modalProductDescription"
  );

  const modalProductDetails = document.querySelector(
    "#modalProductDetails"
  );


  /**
   * Mengisi isi modal berdasarkan
   * data-* pada tombol produk.
   */
  previewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.dataset.title || "";
      const description =
        button.dataset.description || "";
      const details =
        button.dataset.details || "";
      const image =
        button.dataset.image || "";

      if (modalProductTitle) {
        modalProductTitle.textContent = title;
      }

      if (modalProductDescription) {
        modalProductDescription.textContent =
          description;
      }

      if (modalProductDetails) {
        modalProductDetails.textContent = details;
      }

      if (modalProductImage) {
        modalProductImage.src = image;
      }
    });
  });


  /* ========================================
     RESPONSIVE FILTER SLIDER
  ======================================== */

  window.addEventListener("resize", () => {
    const currentActiveButton = document.querySelector(
      ".product-filter-btn.active"
    );

    moveFilterSlider(currentActiveButton);
  });
});