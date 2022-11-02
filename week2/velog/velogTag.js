//로컬스토리지에서 태그 가져와서 배열 형태로 바꾸기
let tagList = JSON.parse(localStorage.getItem("tag"));
if (tagList === null) {
  tagList = [];
}

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
    localStorage.setItem("tag", JSON.stringify(tagList));
  }
};

const removeTag = (e) => {
  tagList = tagList.filter((element) => element != e.target.innerHTML);
  localStorage.setItem("tag", JSON.stringify(tagList));
  e.currentTarget.remove();
};

const main = (e) => {
  //localStorage에서 가져온 리스트 수만큼 바로 엘리멘트 추가!
  for (let i = 0; i < tagList.length; i++) {
    console.log("냐냐");
    const newTag = document.createElement("button");
    newTag.className = "tag";
    newTag.addEventListener("click", removeTag);

    newTag.innerHTML = tagList[i];

    const parentElement = document.querySelector(".tag-container");
    parentElement.appendChild(newTag);
  }
  const tagInput = document.querySelector(".input-tag");
  tagInput.addEventListener("keyup", addTag);
};
main();
