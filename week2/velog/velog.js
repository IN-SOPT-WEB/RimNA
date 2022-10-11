function useSelect({ box }) {
  const toggleSelectBox = (selectBox) => {
    selectBox.classList.toggle("active");
  };

  const selectOption = (optionElement) => {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
  };

  box.forEach((selectBoxElement) => {
    selectBoxElement.addEventListener("click", function (e) {
      const targetElement = e.target;
      const isOptionElement = targetElement.classList.contains("option");

      if (isOptionElement) {
        selectOption(targetElement);
      }

      toggleSelectBox(selectBoxElement);
    });
  });
}

function main() {
  console.log("냐냐");
  useSelect({
    box: document.querySelectorAll(".select"),
    right: document.querySelector(".right"),
    btn: document.querySelectorAll("nav button"),
  });

  //   useTodoList({
  //     container: document.querySelector(".todo-list"),
  //     input: document.querySelectorAll(".todo-add-group__input"),
  //     submit: document.querySelectorAll(".todo-add-group__btn-add"),
  //     deleteBtn: document.querySelectorAll(".todo__item__btn-delete"),
  //   });
}

main();
