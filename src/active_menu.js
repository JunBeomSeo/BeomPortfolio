// 구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다. (querySelector)
// 2. IntersectionObserver를 사용해서 모든 섹션들을 관찰 해야한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹선 :
// - 만약 다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
//    (현재 화면에 보여지고 있는 section들을 알아야함.)
// - 마지막 contact 섹션이 보여진다면, 가장 마지막 섹션을 선택
const sectionIds = ["#home", "#about", "#skills", "#work", "#contact"];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map(
  (id) => document.querySelector(`[href="${id}"]`) //` ` ⭕ → 템플릿 리터럴 (변수 사용 가능)
);
const visibleSections = sectionIds.map(() => false);

const options = {};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne; // flag 변수
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    selectLastOne =
      index === sectionIds.length - 1 && // entry의 index가 가장 마지막이고
      entry.isIntersecting && // 그 entry가 보여지고 있고
      entry.intersectionRatio >= 0.99; // 99퍼센트가 다 보여진다면
    // selectLastOne 을 true로 ,,
  });

  const navIndex = selectLastOne
    ? sectionIds.length - 1
    : findFirstIntersecting(visibleSections);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}
