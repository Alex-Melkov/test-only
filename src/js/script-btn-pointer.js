window.addEventListener('load', function () {
  document.querySelector('.container').addEventListener('click', function (event) {
    let target = event.target.closest('.btn-pointer');

    if (!target) return;

    target.classList.toggle('active-btn');
  });
});
