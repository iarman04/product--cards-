/* ==========================================================================
   KNOWFFERS B2B MARKETPLACE - MASTER INTERACTIVE LOGIC (28 PRODUCTS)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initViewSwitcher();
  initCategorySidebar();
  initSearchAndFilters();
  initWishlistButtons();
  initModals();
});

/* --- Theme Switcher (Dark / Light) --- */
function initThemeToggle() {
  const themeBtn = document.getElementById("themeToggleBtn");
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem("kf_theme") || "light";
  document.documentElement.setAttribute("data-theme", currentTheme);
  updateThemeIcon(themeBtn, currentTheme);

  themeBtn.addEventListener("click", () => {
    const activeTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("kf_theme", nextTheme);
    updateThemeIcon(themeBtn, nextTheme);
    showToast(`Switched to ${nextTheme.toUpperCase()} mode`);
  });
}

function updateThemeIcon(btn, theme) {
  if (theme === "dark") {
    btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> Light Mode`;
  } else {
    btn.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg> Dark Mode`;
  }
}

/* --- View Switcher (Grid vs List) --- */
function initViewSwitcher() {
  const gridBtn = document.getElementById("viewGridBtn");
  const listBtn = document.getElementById("viewListBtn");
  const container = document.getElementById("masterCardsContainer");

  if (!gridBtn || !listBtn || !container) return;

  gridBtn.addEventListener("click", () => {
    container.classList.remove("list-view");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", () => {
    container.classList.add("list-view");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  });
}

/* --- Category Sidebar Navigation --- */
function initCategorySidebar() {
  const buttons = document.querySelectorAll(".cat-item-btn");
  const cards = document.querySelectorAll(".kf-card");
  const titleHeader = document.getElementById("activeCatHeader");
  const countDisplay = document.getElementById("activeCatCount");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const catFilter = btn.dataset.categoryFilter;
      const catName = btn.dataset.catName || "All Products";

      let visibleCount = 0;
      cards.forEach((card) => {
        const matchesCategory = (catFilter === "all" || card.dataset.category === catFilter);
        const matchesSearch = checkSearchMatch(card);
        const matchesStock = checkStockMatch(card);

        if (matchesCategory && matchesSearch && matchesStock) {
          card.style.display = "flex";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (titleHeader) titleHeader.textContent = catName;
      if (countDisplay) countDisplay.textContent = `${visibleCount} Workplace Items`;
    });
  });
}

/* --- Search & Stock Filter --- */
function initSearchAndFilters() {
  const searchInput = document.getElementById("catalogSearchInput");
  const stockCheckbox = document.getElementById("inStockOnlyCheckbox");

  if (searchInput) {
    searchInput.addEventListener("input", filterAllCards);
  }

  if (stockCheckbox) {
    stockCheckbox.addEventListener("change", filterAllCards);
  }
}

function filterAllCards() {
  const activeCategoryBtn = document.querySelector(".cat-item-btn.active");
  const catFilter = activeCategoryBtn ? activeCategoryBtn.dataset.categoryFilter : "all";
  const cards = document.querySelectorAll(".kf-card");
  const countDisplay = document.getElementById("activeCatCount");

  let visibleCount = 0;
  cards.forEach((card) => {
    const matchesCategory = (catFilter === "all" || card.dataset.category === catFilter);
    const matchesSearch = checkSearchMatch(card);
    const matchesStock = checkStockMatch(card);

    if (matchesCategory && matchesSearch && matchesStock) {
      card.style.display = "flex";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (countDisplay) countDisplay.textContent = `${visibleCount} Workplace Items`;
}

function checkSearchMatch(card) {
  const searchInput = document.getElementById("catalogSearchInput");
  if (!searchInput || !searchInput.value.trim()) return true;

  const query = searchInput.value.toLowerCase().trim();
  const title = (card.querySelector(".kf-product-title")?.textContent || "").toLowerCase();
  const desc = (card.querySelector(".kf-product-desc")?.textContent || "").toLowerCase();
  const sku = (card.querySelector(".kf-sku")?.textContent || "").toLowerCase();
  const vendor = (card.querySelector(".kf-vendor-name")?.textContent || "").toLowerCase();

  return title.includes(query) || desc.includes(query) || sku.includes(query) || vendor.includes(query);
}

function checkStockMatch(card) {
  const stockCheckbox = document.getElementById("inStockOnlyCheckbox");
  if (!stockCheckbox || !stockCheckbox.checked) return true;

  return !card.classList.contains("sold-out");
}

/* --- Wishlist Heart Toggle --- */
function initWishlistButtons() {
  const wishlistBtns = document.querySelectorAll(".kf-wishlist-btn");
  wishlistBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const isSaved = btn.classList.contains("active");
      showToast(isSaved ? "Saved to Watchlist" : "Removed from Watchlist");
    });
  });
}

/* --- Modals (RFQ Inquiry) --- */
function initModals() {
  const backdrop = document.getElementById("rfqModalBackdrop");
  const closeBtn = document.getElementById("rfqModalClose");
  const form = document.getElementById("rfqForm");

  if (!backdrop) return;

  document.querySelectorAll("[data-action='open-rfq']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".kf-card");
      const title = card ? card.querySelector(".kf-product-title")?.textContent : "Workplace Item";
      document.getElementById("rfqProductTitle").textContent = title || "Workplace Item";
      backdrop.classList.add("active");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      backdrop.classList.remove("active");
    });
  }

  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) backdrop.classList.remove("active");
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      backdrop.classList.remove("active");
      showToast("RFQ Inquiry submitted to Supplier! Expect response within 24 hours.");
      form.reset();
    });
  }
}

/* --- Global Toast Notification --- */
function showToast(message) {
  let toast = document.getElementById("kfToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "kfToast";
    toast.className = "kf-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg width="18" height="18" fill="none" stroke="#00BB7F" stroke-width="2" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${message}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Global handler for Add to Cart
window.handleAddToCart = function(productName, moq, packSize, price) {
  showToast(`Added ${moq} ${packSize || 'units'} of "${productName}" to Bulk Cart (${price})`);
};
