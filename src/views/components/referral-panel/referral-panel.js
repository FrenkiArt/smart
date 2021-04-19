if (document.querySelector('.lvl-toggler__lvl')) {
  document.querySelectorAll('.lvl-toggler__lvl').forEach((item) => {
    item.addEventListener('click', lvlHandler);
  });
}

function lvlHandler(e) {
  let currentIndex = 0;

  document.querySelectorAll('.lvl-toggler__lvl').forEach((item, i) => {
    item.classList.remove('active');

    if (item == this) {
      currentIndex = i;
    }
  });

  document.querySelectorAll('.lvls__item').forEach((item) => {
    item.classList.remove('active');
  });

  this.classList.add('active');
  document
    .querySelectorAll('.lvls__item')
    [currentIndex].classList.add('active');
}
