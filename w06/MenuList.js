// MenuList.js
const aMenu = {
  code: "Dinner Menu",
  name: "Bone Fish Restaurant",
  sections: [
    {
      dishNum: 1,
      dish: "Bang Bang Shrimp",
      enrolled: 0,
      days: 9.0,
      instructor: 0,
    },
    {
      dishNum: 2,
      dish: "Imperial Dip",
      enrolled: 0,
      days: 11.0,
      instructor: 0,
    },
    {
      dishNum: 3,
      dish: "Mussels Josephine",
      enrolled: 0,
      days: 12.0,
      instructor: 0,
    },
    {
      dishNum: 4,
      dish: "Ahi Tuna Poke",
      enrolled: 0,
      days: 10.0,
      instructor: 0,
    },
  ],
  init() {
    setCourseInfo(this);
    renderSections(this.sections);
  },
  changeEnrollment: function (dishNum, add = true) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.dishNum == dishNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      this.sections[sectionIndex].instructor= this.sections[sectionIndex].days * this.sections[sectionIndex].enrolled
      renderSections(this.sections);
    }
  },
};

function setCourseInfo(course) {
  const restaurantName = document.querySelector("#restaurantName");
  const menucode = document.querySelector("#menuCode");
  restaurantName.textContent = course.name;
  menucode.textContent = course.code;
}

function renderSections(sections) {
  const html = sections.map(
    (section) => `<tr>
      <td>${section.dishNum}</td>
      <td>${section.dish}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}
export default aMenu;