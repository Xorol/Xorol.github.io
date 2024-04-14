function submitIdeology() {
  document.getElementById("output").innerText = document.getElementById("ideology").innerText;
  document.getElementById("form-div").hidden = true;
  document.getElementById("output-modal").showModal();
}
