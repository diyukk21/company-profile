
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

document.addEventListener("DOMContentLoaded", () => {

  const searchInput = document.getElementById("productSearch");
  const productItems = document.querySelectorAll(".product-item");
  const filterButtons = document.querySelectorAll(".product-filter-btn");

  let activeCategory = "all";

  function filterProducts() {

    const keyword = searchInput
      ? searchInput.value.trim().toLowerCase()
      : "";

    productItems.forEach((product) => {

      const title =
        product.querySelector(".card-title")?.textContent
          .trim()
          .toLowerCase() || "";

      const description =
        product.querySelector(".card-text")?.textContent
          .trim()
          .toLowerCase() || "";

      const category =
        product.dataset.category?.trim().toLowerCase() || "";

      // Cek kategori
      const categoryMatch =
        activeCategory === "all" ||
        category === activeCategory;

      // Cek search
      const searchMatch =
        keyword === "" ||
        title.includes(keyword) ||
        description.includes(keyword);

      // Tampilkan jika keduanya cocok
      product.style.display =
        categoryMatch && searchMatch
          ? ""
          : "none";
    });
  }

  // =========================
  // SEARCH PRODUK
  // =========================

  if (searchInput) {

    searchInput.addEventListener("input", () => {
      filterProducts();
    });

  }


  // =========================
  // FILTER KATEGORI
  // =========================

  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      activeCategory = button.dataset.filter;

      // Update status tombol
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      filterProducts();

    });

  });


  // Jalankan pertama kali
  filterProducts();

});