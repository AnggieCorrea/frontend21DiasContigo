(function () {
  const range = document.querySelector('input');
  let div = document.querySelector('.emoji');
  let mojis = ['đ','đ','đ','đ','âšī¸','đŠ','đ ','đĄ'];

  range.addEventListener('input', (e) => {
  var rangeinput = document.getElementById("rangeinput").value;
  div.textContent = mojis[rangeinput];
  });
})();
