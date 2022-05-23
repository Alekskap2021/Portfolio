window.addEventListener(`DOMContentLoaded`, (e) => {
  e.preventDefault();
  // menu-aside behavior
  const btn = document.querySelector(".menu-burger");
  btn.addEventListener(`click`, () => {
    document.querySelector(".menu-aside").classList.toggle(`d-none`);

    if (document.documentElement.clientWidth < 400) {
      document.querySelector(".menu-aside").classList.add(`col-12`);
      document.querySelector(".menu-aside").classList.remove(`col-1`);
      if (document.querySelector(".menu-aside").classList.contains(`d-none`)) {
        document.querySelector("body").style.overflow = ``;
      } else {
        document.querySelector("body").style.overflow = `hidden`;
      }
    } else {
      document.querySelector(".menu-aside").classList.remove(`col-12`);
      document.querySelector(".menu-aside").classList.add(`col-1`);
      document.querySelector(".profile-page").classList.toggle(`col-11`);
      document.querySelector(".profile-page").classList.toggle(`col-12`);
      document.querySelector(".premium-page").classList.toggle(`col-11`);
      document.querySelector(".premium-page").classList.toggle(`col-12`);
    }
  });

  // toggle active class on links

  function toggleClass(collection, activeClass) {
    collection.forEach((link) => {
      link.addEventListener(`click`, (e) => {
        e.preventDefault();
        collection.forEach((link) => {
          link.classList.remove(activeClass);
          e.currentTarget.classList.add(activeClass);
        });
      });
    });
  }
  toggleClass(document.querySelectorAll(".statistic-nav-item a"), `item-active`);
  toggleClass(document.querySelectorAll(".history-nav-item a"), `active`);
  toggleClass(document.querySelectorAll(".menu-list li"), `active`);
});
/////////
