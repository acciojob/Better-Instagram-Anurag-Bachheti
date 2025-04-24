let dragElem = null;

const parent = document.getElementById("parent");

parent.addEventListener("dragstart", (e) => {
  if (e.target.classList.contains("image")) {
    dragElem = e.target;
    e.target.classList.add("selected");
  }
});

parent.addEventListener("dragend", (e) => {
  e.target.classList.remove("selected");
});

parent.addEventListener("dragover", (e) => {
  e.preventDefault(); // Important! Allows dropping
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();

  if (
    dragElem &&
    e.target !== dragElem &&
    e.target.classList.contains("image")
  ) {
    const children = Array.from(parent.children);
    const draggedIndex = children.indexOf(dragElem);
    const targetIndex = children.indexOf(e.target);

    if (draggedIndex < targetIndex) {
      parent.insertBefore(dragElem, e.target.nextSibling);
    } else {
      parent.insertBefore(dragElem, e.target);
    }

    dragElem = null;
  }
});
