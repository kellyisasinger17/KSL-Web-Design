const styleCategories = [
  "Script",
  "Vintage",
  "Modern",
  "Bold",
  "Serif",
  "Elegant",
  "Editorial",
  "Playful",
];

// ADD OR EDIT GOOGLE FONTS HERE
const fontLibrary = [
  {
    name: "Fleur De Leah",
    family: "'Fleur De Leah', cursive",
    tags: ["Script", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Licorice",
    family: "'Licorice', cursive",
    tags: ["Script", "Playful"],
    googleFontUrl: "",
  },
  {
    name: "Charmonman",
    family: "'Charmonman', cursive",
    tags: ["Script", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Estonia",
    family: "'Estonia', cursive",
    tags: ["Script", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Playfair Display",
    family: "'Playfair Display', serif",
    tags: ["Serif", "Editorial"],
    googleFontUrl: "",
  },
  {
    name: "Markazi Text",
    family: "'Markazi Text', serif",
    tags: ["Serif", "Editorial"],
    googleFontUrl: "",
  },
  {
    name: "Alegreya Sans SC",
    family: "'Alegreya Sans SC', sans-serif",
    tags: ["Modern", "Editorial"],
    googleFontUrl: "",
  },
  {
    name: "Buda",
    family: "'Buda', sans-serif",
    tags: ["Modern", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Hepta Slab",
    family: "'Hepta Slab', serif",
    tags: ["Serif", "Bold"],
    googleFontUrl: "",
  },
  {
    name: "IM Fell English SC",
    family: "'IM Fell English SC', serif",
    tags: ["Vintage", "Editorial"],
    googleFontUrl: "",
  },
  {
    name: "Kotta One",
    family: "'Kotta One', serif",
    tags: ["Serif", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Julius Sans One",
    family: "'Julius Sans One', sans-serif",
    tags: ["Modern", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Modern Antiqua",
    family: "'Modern Antiqua', serif",
    tags: ["Vintage", "Serif"],
    googleFontUrl: "",
  },
  {
    name: "Tangerine",
    family: "'Tangerine', cursive",
    tags: ["Script", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Cinzel",
    family: "'Cinzel', serif",
    tags: ["Serif", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Special Elite",
    family: "'Special Elite', monospace",
    tags: ["Vintage", "Playful"],
    googleFontUrl: "",
  },
  {
    name: "Almendra SC",
    family: "'Almendra SC', serif",
    tags: ["Vintage", "Serif"],
    googleFontUrl: "",
  },
  {
    name: "Jacques Francois Shadow",
    family: "'Jacques Francois Shadow', serif",
    tags: ["Vintage", "Playful"],
    googleFontUrl: "",
  },
  {
    name: "Courier Prime",
    family: "'Courier Prime', monospace",
    tags: ["Vintage", "Editorial"],
    googleFontUrl: "",
  },
  {
    name: "Della Respira",
    family: "'Della Respira', serif",
    tags: ["Serif", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "WindSong",
    family: "'WindSong', cursive",
    tags: ["Script", "Elegant"],
    googleFontUrl: "",
  },
  {
    name: "Mr Bedfort",
    family: "'Mr Bedfort', cursive",
    tags: ["Script", "Vintage"],
    googleFontUrl: "",
  },
  {
    name: "Caesar Dressing",
    family: "'Caesar Dressing', display",
    tags: ["Vintage", "Playful"],
    googleFontUrl: "",
  },
  {
    name: "Cormorant",
    family: "'Cormorant', serif",
    tags: ["Serif", "Elegant"],
    googleFontUrl: "",
  },
];

const paletteCategories = [
  "All Palettes",
  "Winter",
  "Forest",
  "Desert",
  "Seaside",
  "Old World",
  "Gemstones",
  "Summer",
  "Water Elements",
  "Minimal",
];

const paletteTags = [
  "Cool",
  "Warm",
  "Earthy",
  "Bold",
  "Muted",
  "Playful",
  "Bright",
  "Elegant",
  "Red Accent",
];

// CÉDILLE & CO. CURATED COLOR PALETTE LIBRARY
const paletteLibrary = [
  {
    name: "Snowberry",
    category: "Winter",
    tags: ["Cool", "Red Accent"],
    colors: ["#6b212c", "#685652", "#dce0e8", "#8ea1ae"],
  },
  {
    name: "Mulled Wine",
    category: "Winter",
    tags: ["Cool", "Red Accent"],
    colors: ["#78211e", "#bb9771", "#d8c8b8", "#b3b3ac"],
  },
  {
    name: "Midwinter",
    category: "Winter",
    tags: ["Cool", "Muted"],
    colors: ["#824e5d", "#c0a4a2", "#7a8c98", "#e4e0dc"],
  },
  {
    name: "Trailhead",
    category: "Forest",
    tags: ["Earthy", "Muted"],
    colors: ["#363d46", "#7f9070", "#93a889", "#e2e8ee"],
  },
  {
    name: "Fresh Bark",
    category: "Forest",
    tags: ["Earthy", "Warm"],
    colors: ["#6b7f4e", "#a2b5a0", "#dcc8a3", "#5a4a3a"],
  },
  {
    name: "Pine Tree",
    category: "Forest",
    tags: ["Earthy", "Cool"],
    colors: ["#f4eeeb", "#ede3d6", "#7a6b5e", "#1f3d2e"],
  },
  {
    name: "Forest Shade",
    category: "Forest",
    tags: ["Earthy", "Muted"],
    colors: ["#1f3d2e", "#a2b5a0", "#adc1c2", "#4c6a73"],
  },
  {
    name: "Redwood",
    category: "Forest",
    tags: ["Earthy", "Warm"],
    colors: ["#4c2b12", "#7f5235", "#798262", "#ffe5b6"],
  },
  {
    name: "Mariposa",
    category: "Forest",
    tags: ["Earthy", "Warm"],
    colors: ["#dd8e58", "#708a81", "#f8faf0", "#2b2129"],
  },
  {
    name: "Moss and Mist",
    category: "Forest",
    tags: ["Earthy", "Muted"],
    colors: ["#233f41", "#7c9d9c", "#53483e", "#936448"],
  },
  {
    name: "Desert Nights",
    category: "Desert",
    tags: ["Warm", "Earthy"],
    colors: ["#d3c7ad", "#754437", "#6b6751", "#363d46"],
  },
  {
    name: "Desert Summit",
    category: "Desert",
    tags: ["Warm", "Earthy"],
    colors: ["#f1eada", "#cec1a8", "#aaa396", "#584738"],
  },
  {
    name: "Sedona Twilight",
    category: "Desert",
    tags: ["Warm", "Bold"],
    colors: ["#f3ede0", "#cfa292", "#8c3b27", "#212c3d"],
  },
  {
    name: "Soft Sandstone",
    category: "Desert",
    tags: ["Warm", "Muted"],
    colors: ["#f7f2e0", "#dac2b2", "#bf897f", "#4a3025"],
  },
  {
    name: "Cabernet",
    category: "Desert",
    tags: ["Warm", "Bold"],
    colors: ["#483434", "#6b4f4f", "#eed6c4", "#fff3e4"],
  },
  {
    name: "Burnt Cognac",
    category: "Desert",
    tags: ["Warm", "Earthy"],
    colors: ["#eaceaa", "#d39858", "#85431e", "#34150f"],
  },
  {
    name: "French Riviera",
    category: "Seaside",
    tags: ["Muted", "Earthy"],
    colors: ["#dccfb8", "#ad7556", "#f1efe6", "#7a9cb3"],
  },
  {
    name: "Americana",
    category: "Seaside",
    tags: ["Cool", "Red Accent"],
    colors: ["#202933", "#6e7f8d", "#843939", "#f8f8ee"],
  },
  {
    name: "Harbor Breeze",
    category: "Seaside",
    tags: ["Cool", "Bold"],
    colors: ["#390400", "#26449e", "#b7dbf1", "#fffff4"],
  },
  {
    name: "Marina",
    category: "Seaside",
    tags: ["Cool", "Bold"],
    colors: ["#f8f7f0", "#222b52", "#b25640", "#7f858d"],
  },
  {
    name: "Fig Leaf",
    category: "Old World",
    tags: ["Warm", "Bold"],
    colors: ["#4a4203", "#edd9cc", "#894643", "#532439"],
  },
  {
    name: "Cambridge Rose",
    category: "Old World",
    tags: ["Warm", "Bold"],
    colors: ["#7a948b", "#ede3de", "#c6aa96", "#ba7878"],
  },
  {
    name: "Twilight Haze",
    category: "Old World",
    tags: ["Warm", "Bold"],
    colors: ["#d6948b", "#ac6275", "#679bac", "#374057"],
  },
  {
    name: "Parfum",
    category: "Old World",
    tags: ["Warm", "Bold"],
    colors: ["#26282c", "#deb4a0", "#d5b193", "#c5b8b7"],
  },
  {
    name: "Cornflower",
    category: "Old World",
    tags: ["Muted", "Earthy"],
    colors: ["#e0e2e0", "#96a4a5", "#9f8551", "#cab69d"],
  },
  {
    name: "Peacock",
    category: "Old World",
    tags: ["Cool", "Bold"],
    colors: ["#10302a", "#ece5d3", "#d1e0d6", "#f1ece2"],
  },
  {
    name: "Muted Fancy",
    category: "Old World",
    tags: ["Earthy", "Bold"],
    colors: ["#cbbab7", "#ece5d3", "#a88d65", "#514742"],
  },
  {
    name: "Vintage Porsche",
    category: "Old World",
    tags: ["Earthy", "Bold"],
    colors: ["#afa38d", "#837459", "#646256", "#13271c"],
  },
  {
    name: "Library",
    category: "Old World",
    tags: ["Earthy", "Bold"],
    colors: ["#e7dfd2", "#141c2c", "#1e2f25", "#3c2a20"],
  },
  {
    name: "Opaline",
    category: "Gemstones",
    tags: ["Bright", "Playful"],
    colors: ["#aeccc3", "#c5ba8d", "#f7f3f0", "#fab6ab"],
  },
  {
    name: "Sapphire Mining",
    category: "Gemstones",
    tags: ["Cool", "Bold"],
    colors: ["#f5f4f0", "#beb7a7", "#3b507d", "#112250"],
  },
  {
    name: "Mystic",
    category: "Gemstones",
    tags: ["Cool", "Bold"],
    colors: ["#2c3539", "#4c3c62", "#8f9779", "#e4dec9"],
  },
  {
    name: "Hydrangea",
    category: "Summer",
    tags: ["Cool", "Playful"],
    colors: ["#faf9f6", "#bfd8d2", "#8fafd1", "#23395b"],
  },
  {
    name: "Matcha Brew",
    category: "Summer",
    tags: ["Earthy", "Playful"],
    colors: ["#f6f7ec", "#7a8864", "#677d6a", "#40534c"],
  },
  {
    name: "Beach Sunrise",
    category: "Summer",
    tags: ["Bold", "Playful"],
    colors: ["#451616", "#f47358", "#dbbdde", "#99a5cd"],
  },
  {
    name: "Lemon Grove",
    category: "Summer",
    tags: ["Warm", "Playful"],
    colors: ["#f8f4e8", "#f4b840", "#d9a450", "#4f583b"],
  },
  {
    name: "Daisy",
    category: "Summer",
    tags: ["Warm", "Playful"],
    colors: ["#f8f4e8", "#e3c582", "#ceac7a", "#d6a332"],
  },
  {
    name: "Aperol",
    category: "Summer",
    tags: ["Warm", "Playful"],
    colors: ["#a0bec3", "#f7b557", "#e27921", "#c1521e"],
  },
  {
    name: "Salsa",
    category: "Summer",
    tags: ["Warm", "Bold"],
    colors: ["#fffaeb", "#8a8635", "#d06224", "#ae431e"],
  },
  {
    name: "Ocean Driftwood",
    category: "Water Elements",
    tags: ["Cool", "Muted"],
    colors: ["#5d768b", "#e3c9a4", "#c8b39b", "#f8efe5"],
  },
  {
    name: "Lake District",
    category: "Water Elements",
    tags: ["Cool", "Muted"],
    colors: ["#2a4628", "#779663", "#386986", "#e8eef1"],
  },
  {
    name: "Alpine Lake",
    category: "Water Elements",
    tags: ["Cool", "Muted"],
    colors: ["#083a4f", "#a58d66", "#c0d5d6", "#e5e1dd"],
  },
  {
    name: "Sunset Storm",
    category: "Water Elements",
    tags: ["Cool", "Earthy"],
    colors: ["#537179", "#cfe0e7", "#d99c2b", "#d9d1c7"],
  },
  {
    name: "Bahamas",
    category: "Water Elements",
    tags: ["Cool", "Bright"],
    colors: ["#083a4f", "#407e8c", "#c0d5d6", "#faf7f2"],
  },
  {
    name: "Alaskan Shores",
    category: "Water Elements",
    tags: ["Cool", "Muted"],
    colors: ["#1a3636", "#a9bdd1", "#c8c0b5", "#faf7f2"],
  },
  {
    name: "The Minimalists",
    category: "Minimal",
    tags: ["Earthy", "Muted"],
    colors: ["#f5f5f5", "#dcd9d0", "#beb2a2", "#34454d"],
  },
  {
    name: "Midnight Sea",
    category: "Minimal",
    tags: ["Cool", "Muted"],
    colors: ["#f5f5f5", "#5e7583", "#34454d", "#0a131e"],
  },
  {
    name: "Nuit",
    category: "Minimal",
    tags: ["Cool", "Muted"],
    colors: ["#0e141c", "#314b6e", "#607ea2", "#8197ac"],
  },
  {
    name: "Stormy Sky",
    category: "Minimal",
    tags: ["Cool", "Muted"],
    colors: ["#d7d7d6", "#b7b8bb", "#595d66", "#272b36"],
  },
  {
    name: "Ink Eclipse",
    category: "Minimal",
    tags: ["Earthy", "Muted"],
    colors: ["#dcd7c9", "#a27b5b", "#3f4e4f", "#2c3639"],
  },
];

const state = {
  selectedCategories: new Set(),
  selectedFont: fontLibrary[0],
  brandName: "",
  selectedPaletteCategory: "All Palettes",
  selectedPaletteTags: new Set(),
  selectedPalette: paletteLibrary[0],
};

const loadedFontUrls = new Set();
const brandInput = document.querySelector("#brand-name");
const filterContainer = document.querySelector("#style-filters");
const clearFiltersButton = document.querySelector("#clear-filters");
const fontGrid = document.querySelector("#font-grid");
const fontCount = document.querySelector("#font-count");
const emptyMessage = document.querySelector("#empty-message");
const brandPreview = document.querySelector("#brand-preview");
const selectedFontName = document.querySelector("#selected-font-name");
const paletteGrid = document.querySelector("#palette-grid");
const paletteCategoryFilters = document.querySelector(
  "#palette-category-filters",
);
const paletteTagFilters = document.querySelector("#palette-tag-filters");
const clearPaletteTags = document.querySelector("#clear-palette-tags");
const paletteResultLabel = document.querySelector("#palette-result-label");
const paletteCount = document.querySelector("#palette-count");
const paletteEmptyMessage = document.querySelector("#palette-empty-message");
const selectedPaletteTitle = document.querySelector("#selected-palette-title");
const selectedPaletteDetails = document.querySelector(
  "#selected-palette-details",
);
const selectedHexList = document.querySelector("#selected-hex-list");
const selectedSwatches = document.querySelector("#selected-swatches");
const mockupBrandName = document.querySelector("#mockup-brand-name");
const identitySelectedFontName = document.querySelector(
  "#identity-selected-font-name",
);
const identitySelectedPaletteName = document.querySelector(
  "#identity-selected-palette-name",
);
const mockupMain = document.querySelector(".mockup-main");
const mockupButton = document.querySelector("#mockup-button");
const mockupAccent = document.querySelector(".mockup-accent");
const companySummary = document.querySelector("#company-summary");
const typefaceSummary = document.querySelector("#typeface-summary");
const paletteSummary = document.querySelector("#palette-summary");

function updateSectionSummaries() {
  companySummary.textContent = getDisplayName();
  typefaceSummary.textContent = `${state.selectedFont.name} · ${state.selectedFont.tags.join(" · ")}`;
  paletteSummary.textContent = `${state.selectedPalette.name} · ${state.selectedPalette.category}`;
}

function setSectionExpanded(section, shouldExpand) {
  const trigger = section.querySelector(".collapsible-trigger");
  const panel = section.querySelector(".collapsible-panel");
  trigger.setAttribute("aria-expanded", String(shouldExpand));
  panel.setAttribute("aria-hidden", String(!shouldExpand));
  panel.inert = !shouldExpand;

}

function initializeCollapsibleSections() {
  document.querySelectorAll("[data-collapsible]").forEach((section) => {
    const trigger = section.querySelector(".collapsible-trigger");
    setSectionExpanded(
      section,
      trigger.getAttribute("aria-expanded") === "true",
    );
    trigger.addEventListener("click", () => {
      setSectionExpanded(
        section,
        trigger.getAttribute("aria-expanded") !== "true",
      );
    });
  });

}

function getDisplayName() {
  return state.brandName.trim() || "Your Brand Name";
}

function getLuminance(hex) {
  const normalizedHex = hex.replace("#", "");
  const channels = [0, 2, 4].map((startIndex) => {
    const value =
      parseInt(normalizedHex.slice(startIndex, startIndex + 2), 16) / 255;
    return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function sortColorsLightToDark(colors) {
  return [...colors].sort(
    (colorA, colorB) => getLuminance(colorB) - getLuminance(colorA),
  );
}

function getContrastRatio(colorA, colorB) {
  const lighter = Math.max(getLuminance(colorA), getLuminance(colorB));
  const darker = Math.min(getLuminance(colorA), getLuminance(colorB));
  return (lighter + 0.05) / (darker + 0.05);
}

function loadGoogleFont(font) {
  if (!font.googleFontUrl || loadedFontUrls.has(font.googleFontUrl)) return;

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = font.googleFontUrl;
  stylesheet.dataset.fontName = font.name;
  document.head.appendChild(stylesheet);
  loadedFontUrls.add(font.googleFontUrl);
}

function getFilteredFonts() {
  if (state.selectedCategories.size === 0) return fontLibrary;

  return fontLibrary.filter((font) =>
    font.tags.some((tag) => state.selectedCategories.has(tag)),
  );
}

function updatePreviewText() {
  const displayName = getDisplayName();
  brandPreview.textContent = displayName;
  document.querySelectorAll(".font-sample").forEach((sample) => {
    sample.textContent = displayName;
  });
  renderBrandPreview();
  updateSectionSummaries();
}

function selectFont(font) {
  state.selectedFont = font;
  loadGoogleFont(font);
  brandPreview.style.fontFamily = font.family;
  selectedFontName.textContent = font.name;

  document.querySelectorAll(".font-card").forEach((card) => {
    card.setAttribute(
      "aria-pressed",
      String(card.dataset.fontName === font.name),
    );
  });
  renderBrandPreview();
  updateSectionSummaries();
}

function renderFontCards() {
  const matchingFonts = getFilteredFonts();
  fontGrid.replaceChildren();

  matchingFonts.forEach((font) => {
    loadGoogleFont(font);

    const card = document.createElement("button");
    card.type = "button";
    card.className = "font-card";
    card.dataset.fontName = font.name;
    card.setAttribute("aria-label", `Select ${font.name} typeface`);
    card.setAttribute(
      "aria-pressed",
      String(state.selectedFont.name === font.name),
    );

    const sample = document.createElement("span");
    sample.className = "font-sample";
    sample.style.fontFamily = font.family;
    sample.textContent = getDisplayName();

    const meta = document.createElement("span");
    meta.className = "font-meta";

    const name = document.createElement("span");
    name.className = "font-name";
    name.textContent = font.name;

    const tags = document.createElement("span");
    tags.className = "font-tags";
    font.tags.forEach((tag) => {
      const tagElement = document.createElement("span");
      tagElement.className = "font-tag";
      tagElement.textContent = tag;
      tags.appendChild(tagElement);
    });

    meta.append(name, tags);
    card.append(sample, meta);
    card.addEventListener("click", () => selectFont(font));
    fontGrid.appendChild(card);
  });

  const resultLabel = matchingFonts.length === 1 ? "typeface" : "typefaces";
  fontCount.textContent = `${matchingFonts.length} ${resultLabel}`;
  emptyMessage.hidden = matchingFonts.length > 0;
}

function renderFilters() {
  styleCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = category;
    button.setAttribute("aria-pressed", "false");

    button.addEventListener("click", () => {
      if (state.selectedCategories.has(category)) {
        state.selectedCategories.delete(category);
      } else {
        state.selectedCategories.add(category);
      }
      button.setAttribute(
        "aria-pressed",
        String(state.selectedCategories.has(category)),
      );
      renderFontCards();
    });

    filterContainer.appendChild(button);
  });
}

function filterPalettes() {
  return paletteLibrary.filter((palette) => {
    const matchesCategory =
      state.selectedPaletteCategory === "All Palettes" ||
      palette.category === state.selectedPaletteCategory;
    const matchesTags =
      state.selectedPaletteTags.size === 0 ||
      palette.tags.some((tag) => state.selectedPaletteTags.has(tag));
    return matchesCategory && matchesTags;
  });
}

async function copyHexCode(hexCode, button) {
  try {
    await navigator.clipboard.writeText(hexCode.toUpperCase());
  } catch {
    const textArea = document.createElement("textarea");
    textArea.value = hexCode.toUpperCase();
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
  }

  const originalLabel = hexCode.toUpperCase();
  button.textContent = "Copied!";
  window.setTimeout(() => {
    button.textContent = originalLabel;
  }, 1000);
}

function createHexButton(color, className = "hex-button") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = color.toUpperCase();
  button.setAttribute("aria-label", `Copy ${color.toUpperCase()} to clipboard`);
  button.setAttribute("aria-live", "polite");
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    copyHexCode(color, button);
  });
  return button;
}

function selectPalette(palette) {
  state.selectedPalette = palette;
  document.querySelectorAll(".palette-card").forEach((card) => {
    card.setAttribute(
      "aria-selected",
      String(card.dataset.paletteName === palette.name),
    );
  });
  renderSelectedPalette();
  renderBrandPreview();
  updateSectionSummaries();
}

function renderPalettes() {
  const palettes = filterPalettes();
  paletteGrid.replaceChildren();

  palettes.forEach((palette) => {
    const card = document.createElement("article");
    card.className = "palette-card";
    card.dataset.paletteName = palette.name;
    card.tabIndex = 0;
    card.setAttribute("role", "option");
    card.setAttribute("aria-label", `Select ${palette.name} palette`);
    card.setAttribute(
      "aria-selected",
      String(state.selectedPalette.name === palette.name),
    );

    const swatches = document.createElement("div");
    swatches.className = "swatches";
    swatches.setAttribute("aria-label", `${palette.name} color swatches`);

    const orderedColors = sortColorsLightToDark(palette.colors);
    orderedColors.forEach((color) => {
      const swatch = document.createElement("span");
      swatch.style.backgroundColor = color;
      swatch.title = color;
      swatches.appendChild(swatch);
    });

    const name = document.createElement("h3");
    name.textContent = palette.name;
    const category = document.createElement("p");
    category.className = "palette-category";
    category.textContent = palette.category;
    const tags = document.createElement("p");
    tags.className = "palette-tags";
    tags.textContent = palette.tags.join(" · ");

    const hexList = document.createElement("div");
    hexList.className = "hex-list";
    orderedColors.forEach((color) =>
      hexList.appendChild(createHexButton(color)),
    );

    card.append(swatches, name, category, tags, hexList);
    card.addEventListener("click", () => selectPalette(palette));
    card.addEventListener("keydown", (event) => {
      if (event.target !== card || (event.key !== "Enter" && event.key !== " "))
        return;
      event.preventDefault();
      selectPalette(palette);
    });
    paletteGrid.appendChild(card);
  });

  paletteResultLabel.textContent = state.selectedPaletteCategory;
  paletteCount.textContent = `${palettes.length} ${palettes.length === 1 ? "palette" : "palettes"}`;
  paletteEmptyMessage.hidden = palettes.length > 0;
}

function renderPaletteFilters() {
  paletteCategories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-category-button";
    button.textContent = category;
    button.setAttribute(
      "aria-pressed",
      String(category === state.selectedPaletteCategory),
    );
    button.addEventListener("click", () => {
      state.selectedPaletteCategory = category;
      paletteCategoryFilters
        .querySelectorAll("button")
        .forEach((filterButton) => {
          filterButton.setAttribute(
            "aria-pressed",
            String(filterButton.textContent === category),
          );
        });
      renderPalettes();
    });
    paletteCategoryFilters.appendChild(button);
  });

  paletteTags.forEach((tag) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-tag-button";
    button.textContent = tag;
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      if (state.selectedPaletteTags.has(tag))
        state.selectedPaletteTags.delete(tag);
      else state.selectedPaletteTags.add(tag);
      button.setAttribute(
        "aria-pressed",
        String(state.selectedPaletteTags.has(tag)),
      );
      renderPalettes();
    });
    paletteTagFilters.appendChild(button);
  });
}

function renderSelectedPalette() {
  const palette = state.selectedPalette;
  const orderedColors = sortColorsLightToDark(palette.colors);
  selectedPaletteTitle.textContent = palette.name;
  selectedPaletteDetails.textContent = `${palette.category} · ${palette.tags.join(" · ")}`;
  selectedSwatches.replaceChildren();
  selectedHexList.replaceChildren();

  orderedColors.forEach((color) => {
    const swatch = document.createElement("span");
    swatch.style.backgroundColor = color;
    swatch.title = color.toUpperCase();
    selectedSwatches.appendChild(swatch);
    selectedHexList.appendChild(createHexButton(color, "selected-hex-button"));
  });
}

function updateIdentitySelectionSummary() {
  identitySelectedFontName.textContent =
    state.selectedFont?.name || "Not selected";
  identitySelectedPaletteName.textContent =
    state.selectedPalette?.name || "Not selected";
}

function renderBrandPreview() {
  updateIdentitySelectionSummary();
  if (!state.selectedPalette || !state.selectedFont) return;
  const orderedColors = sortColorsLightToDark(state.selectedPalette.colors);
  const [lightestColor, secondaryColor, accentColor, darkestColor] =
    orderedColors;
  const backgroundColor =
    getContrastRatio(lightestColor, darkestColor) >= 4.5
      ? lightestColor
      : "#fbfaf7";

  mockupBrandName.textContent = brandInput.value || "Your Brand Name";
  mockupBrandName.style.fontFamily = state.selectedFont.family;
  mockupBrandName.style.color = darkestColor;
  mockupMain.style.backgroundColor = backgroundColor;
  mockupMain.style.color = darkestColor;
  mockupMain.style.borderColor = accentColor;
  mockupButton.style.backgroundColor = accentColor;
  mockupButton.style.color =
    getContrastRatio(accentColor, darkestColor) >= 4.5
      ? darkestColor
      : backgroundColor;
  mockupAccent.children[0].style.backgroundColor = secondaryColor;
  mockupAccent.children[1].style.backgroundColor = accentColor;
}

brandInput.addEventListener("input", (event) => {
  state.brandName = event.target.value;
  updatePreviewText();
});

clearFiltersButton.addEventListener("click", () => {
  state.selectedCategories.clear();
  document.querySelectorAll(".filter-button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  renderFontCards();
});

clearPaletteTags.addEventListener("click", () => {
  state.selectedPaletteTags.clear();
  paletteTagFilters.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
  renderPalettes();
});

renderFilters();
renderFontCards();
selectFont(state.selectedFont);
renderPaletteFilters();
renderPalettes();
renderSelectedPalette();
renderBrandPreview();
updateSectionSummaries();
initializeCollapsibleSections();
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach((video) => video.pause());
}
