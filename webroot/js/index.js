function moveElement() {
  const div = document.getElementById("main");

  div.style.top = `${Math.random() * 200}px`;
  div.style.left = `${Math.random() * 200}px`;
}
