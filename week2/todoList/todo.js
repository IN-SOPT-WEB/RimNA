function useTodoList({ container, input, submit, deleteBtn }) {
  const onAdd = (event) => {
    // event.target => span 아이콘
    let parentContainer =
      event.target.parentElement.parentElement.parentElement;
    let realContainer = parentContainer.querySelector(".todo-list");

    //부모 요소가 오늘인지 내일인지 확인
    let realInput = null;
    if (parentContainer.className == "left") {
      realInput = input[0];
    } else {
      realInput = input[1];
    }

    const currentValue = realInput.value;

    if (currentValue == "" || currentValue == null) {
      return; //입력한 데이터가 없을 시 추가 기능 수행 X
    } else {
      const currentLi = document.createElement("li");
      currentLi.classList.add("todo__item");
      currentLi.innerHTML = currentValue;

      const currentDeleteButton = document.createElement("button");
      currentDeleteButton.classList.add("todo__item__btn-delete");
      currentDeleteButton.innerHTML = `<span class="material-icons"></span>`;
      currentDeleteButton.addEventListener("click", onDelete);

      currentLi.appendChild(currentDeleteButton);

      realContainer.appendChild(currentLi);

      realInput.value = null;
      event = null;
    }
  };

  const onDelete = (event) => {
    let parent = event.target.parentElement.parentElement;
    parent.remove();
  };

  for (let i = 0; i < submit.length; i++) {
    submit[i].querySelector("span").addEventListener("click", onAdd);
  }
  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", onDelete);
  }
}

function useViewState({ left, right, btn }) {
  const onView = (event) => {
    if (event.target.className == "btn-today") {
      right.className = "hidden";
      left.className = "left";
    } else if (event.target.className == "btn-tomorrow") {
      right.className = "right";
      left.className = "hidden";
    } else if (event.target.className == "btn-all") {
      right.className = "right";
      left.className = "left";
    }
  };

  for (let i = 0; i < 3; i++) {
    btn[i].addEventListener("click", onView);
  }
}

function main() {
  useViewState({
    left: document.querySelector(".left"),
    right: document.querySelector(".right"),
    btn: document.querySelectorAll("nav button"),
  });

  useTodoList({
    container: document.querySelector(".todo-list"),
    input: document.querySelectorAll(".todo-add-group__input"),
    submit: document.querySelectorAll(".todo-add-group__btn-add"),
    deleteBtn: document.querySelectorAll(".todo__item__btn-delete"),
  });
}

main();
