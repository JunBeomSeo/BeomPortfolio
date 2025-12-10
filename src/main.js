// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height; // getBoundingClientRect() 함수를 이용해서 헤더의 높이를 반환받기
document.addEventListener("scroll", function () {
  // 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링!
  console.log(window.scrollY);
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});
