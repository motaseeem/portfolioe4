function openModalProject(i) {
  const modal = document.getElementById("modal-p-" + i);
  if (modal) {
    document.getElementById("modal-p-" + i).style.zIndex = "999";
    document.getElementById("modal-p-" + i).style.opacity = "1";
  }
}

function closeModalProject(i) {
  const modal = document.getElementById("modal-p-" + i);
  if (modal) {
    document.getElementById("modal-p-" + i).style.zIndex = "-1";
    document.getElementById("modal-p-" + i).style.opacity = "0";
  }
}

function nextProject(i) {
  const modalOpenedIndex = i+1;
  const modalOpened = document.getElementById("modal-p-" + modalOpenedIndex);
  const modalClosed = document.getElementById("modal-p-" + i);
  if (modalOpened && modalClosed) {
    document.getElementById("modal-p-" + i).style.zIndex = "-1";
    document.getElementById("modal-p-" + i).style.opacity = "0";

    document.getElementById("modal-p-" + modalOpenedIndex).style.zIndex = "999";
    document.getElementById("modal-p-" + modalOpenedIndex).style.opacity = "1";
  }
}

function previousProject(i) {
  const modalOpenedIndex = i-1;

  const modalOpened = document.getElementById("modal-p-" + modalOpenedIndex);
  const modalClosed = document.getElementById("modal-p-" + i);
  if (modalOpened && modalClosed) {
    document.getElementById("modal-p-" + i).style.zIndex = "-1";
    document.getElementById("modal-p-" + i).style.opacity = "0";

    document.getElementById("modal-p-" + modalOpenedIndex).style.zIndex = "999";
    document.getElementById("modal-p-" + modalOpenedIndex).style.opacity = "1";
  }
}