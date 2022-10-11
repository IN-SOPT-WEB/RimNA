function useViewState()


function useTodoList({container,input,submit}){
    const onAdd=()=>{
        const currentValue=input.value;

        const currentLi = document.createElement("li");
        currentLi.classList.add("todo__item");
        currentLi.innerHTML=currentValue;

        const currentDeleteButton= document.createElement("button");
        currentDeleteButton.innerHTML=`<span class="material-icons"></span>`;

        // currentDeleteButton.addEventListener("click",currentLi)

        currentLi.appendChild(currentDeleteButton);

        container.appendChild(currentLi);
    };

    submit.addEventListner("click",onAdd);
    // input.addEventListner("keydown",onAdd);

};

function useViewState({left}){
    const test=()=>{
        console.log('냐냐')
    }
    left.addEventListner('click',test);
};


function main(){
    useViewState({
        left: document.querySelector("left"),
    });
    useTodoList({
        // container: document.querySelector("todo-list")
        // input:
        // submit: 
    })
}


main();