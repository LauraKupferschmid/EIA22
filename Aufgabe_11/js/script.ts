namespace Aufgabe11 {

interface ToDo {
    task: string;
    check: boolean;
}

let itodo: ToDo []= []
  ;


var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;
var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;


window.addEventListener("load", function(): void {

inputDOMElement = document.querySelector("#inputTodo");
addButtonDOMElement = document.querySelector("#addButton");
todosDOMElement = document.querySelector("#todos");
counterDOMElement = document.querySelector("#counter");
openDOMElement = document.querySelector("#open");
doneDOMElement = document.querySelector("#done");

addButtonDOMElement.addEventListener("click", addTodo);


drawListToDOM();
});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

for (let index: number = 0; index < itodo.length; index++) {
    let todo: HTMLElement = document.createElement("div");
    todo.classList.add("todo");

    todo.innerHTML =  "<span class='check " + itodo[index].check + "'><i class='fas fa-check'></i></span>"
    + itodo[index].task +
     "<span class='trash fas fa-trash-alt'></span>";

    todo.querySelector(".check").addEventListener("click", function(): void {
        toggleCheckState(index);
    });
    todo.querySelector(".trash").addEventListener("click", function(): void {
        deleteTodo(index);
    });

    todosDOMElement.appendChild(todo);

    updateCounter(index);    

}

}


function updateCounter(index: number): void {
    /*let i = 0*/
    counterDOMElement.innerHTML = itodo.length + " in total";
    /*if(itodo[index].check == false) {openDOMElement.innerHTML = i ++ + " open"};
    if(itodo[index].check == true) {doneDOMElement.innerHTML = i ++ + " done"}*/
}


function addTodo(): void {
  
    if (inputDOMElement.value != "") {
        itodo.unshift({task:inputDOMElement.value,check: false});
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {
    itodo[index].check = !itodo[index].check;
    drawListToDOM();
}


function deleteTodo(index: number): void {
    itodo.splice(index, 1);
    drawListToDOM();
}

}