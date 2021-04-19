if (document.querySelector('.periods__item')) {
  document.querySelectorAll('.periods__item').forEach((item) => {
    item.addEventListener('click', clickPeriodsHandler);
  });
}

function clickPeriodsHandler(e) {
  const periods = e.target.closest('.periods');

  periods.querySelectorAll('.periods__item').forEach((item) => {
    item.classList.remove('active');
  });

  this.classList.add('active');
}
