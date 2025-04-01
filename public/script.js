async function compare() {
  const originalPrompt = document.getElementById("originalPrompt").value;
  const curatedPrompt = document.getElementById("curatedPrompt").value;
  const originalResponse = document.getElementById("originalResponse");
  const curatedResponse = document.getElementById("curatedResponse");
  const resultContainer = document.getElementById("resultContainer");

  const res = await fetch("/api/compare", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ originalPrompt, curatedPrompt })
  });

  const data = await res.json();
  originalResponse.innerText = data.originalResponse;
  curatedResponse.innerText = data.curatedResponse;
  resultContainer.classList.remove("d-none");
}
