"use strict";
// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height; // getBoundingClientRect() 함수를 이용해서 헤더의 높이를 반환받기
document.addEventListener("scroll", function () {
  // 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함.
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", function () {
  home.style.opacity = 1 - window.scrollY / homeHeight; // 인 라인 스타일을 이용함 -> home.style.opacity
});

// Arrow Up 버튼을 아래로 스크롤시 투명하게 처리함.
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", function () {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", function () {
  navbarMenu.classList.toggle("open");
});

// Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
navbarMenu.addEventListener("click", function () {
  navbarMenu.classList.remove("open");
});
