document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  const nav = document.querySelector("[data-sticky-nav]");
  const topBar = document.querySelector(".top-bar");
  if (!nav || !topBar) return;

  const updateStickyNav = () => {
    const shouldStick = window.scrollY >= topBar.offsetHeight;
    nav.classList.toggle("fixed-top", shouldStick);
    nav.classList.toggle("shadow-sm", shouldStick);
    document.body.style.paddingTop = shouldStick ? `${nav.offsetHeight}px` : "";
  };

  updateStickyNav();
  window.addEventListener("scroll", updateStickyNav, { passive: true });
  window.addEventListener("resize", updateStickyNav);
});
