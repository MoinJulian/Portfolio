// reference:
// https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb

import imagesLoaded from "imagesloaded";

export function applyMasonry(options) {
  const {
    gridSelector,
    itemSelector,
    contentSelector,
    rowHeight = 20,
  } = options;
  if (!gridSelector) throw new Error("no grid selector provided");
  if (!itemSelector) throw new Error("no item selector provided");
  if (!contentSelector) throw new Error("no content selector provided");
  const allItems = document.querySelectorAll(itemSelector);
  const grid = document.querySelector(gridSelector);
  grid.style.gridAutoRows = rowHeight + "px";

  function resizeGridItem(item) {
    const rowGap = parseInt(
      window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
    );
    const rowSpan = Math.ceil(
      (item.querySelector(contentSelector).getBoundingClientRect().height +
        rowGap) /
        (rowHeight + rowGap)
    );
    item.style.gridRowEnd = "span " + rowSpan;
  }

  function resizeAllGridItems() {
    allItems.forEach(resizeGridItem);
  }

  window.onload = resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);

  allItems.forEach((item) => {
    imagesLoaded(item, resizeInstance);
  });

  function resizeInstance(instance) {
    const item = instance.elements[0];
    resizeGridItem(item);
  }

  return resizeAllGridItems;
}
