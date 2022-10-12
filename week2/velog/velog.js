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

function useModal({ post, bg, body }) {
  const closeModal = (e) => {
    bg.className = "close-modal";
    body.style.overflow = "auto";

    //모달을 띄우면서 새로 생성했던 모달 포스트와 닫기버튼 돔 객체를 삭제해줌
    const deleteModalPost = document.querySelector(".post-card__modal-open");
    const deleteModalBtn = document.querySelector(".modal__btn-delete");
    deleteModalPost.remove();
    deleteModalBtn.remove();
  };

  const openModal = (e) => {
    //모달이 닫혀있을 경우
    bg.className = "modal";
    body.style.overflow = "hidden"; //스크롤 방지

    const currentPost = e.currentTarget.cloneNode(true);
    currentPost.className = "post-card__modal-open";

    //닫기 버튼
    const closeButton = document.createElement("button");
    closeButton.classList.add("modal__btn-delete");
    closeButton.innerHTML = `X`;
    closeButton.addEventListener("click", closeModal);

    bg.appendChild(currentPost);
    bg.appendChild(closeButton);
  };

  for (let i = 0; i < post.length; i++) {
    post[i].addEventListener("click", openModal);
  }
}

function main() {
  useSelect({
    box: document.querySelectorAll(".select"),
  });

  useModal({
    post: document.querySelectorAll(".post-card"),
    bg: document.querySelector(".close-modal"),
    body: document.querySelector("body"),
  });
}

main();
