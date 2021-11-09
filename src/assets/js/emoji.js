(function () {
  const range = document.querySelector('input');
  let div = document.querySelector('.emoji');
  let mojis = ['😄','🙂','😐','😑','☹️','😩','😠','😡'];

  range.addEventListener('input', (e) => {
  var rangeinput = document.getElementById("rangeinput").value;
  div.textContent = mojis[rangeinput];
  });
})();
