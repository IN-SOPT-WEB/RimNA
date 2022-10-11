const tagIsOkay = (tag) => {
  if (tag == undefined || tag == null || tag.length <= 0) {
    return false;
  } else if (tagList.includes(tag) == true) {
    alert("중복된 태그는 추가할 수 없습니다!");
    return false;
  }
  return true;
};

const addTag = (e) => {
  if (e.keyCode === 13 && tagIsOkay(e.target.value)) {
    const newTag = document.createElement("button");
    newTag.className = "tag";
    newTag.addEventListener("click", removeTag);

    newTag.innerHTML = e.target.value;

    const parentElement = document.querySelector(".tag-container");
    parentElement.appendChild(newTag);

    tagList.push(e.target.value);
    e.target.value = null;
  }
};

const removeTag = (e) => {
  tagList = tagList.filter((element) => element != e.target.innerHTML);
  e.currentTarget.remove();
};

let tagList = []; //중복된 태그를 확인하기 위해 태그 리스트 저장
const tagInput = document.querySelector(".input-tag");
tagInput.addEventListener("keyup", addTag);
