var Aufgabe11;
(function (Aufgabe11) {
    let itodo = [];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    var counterDOMElement;
    var openDOMElement;
    var doneDOMElement;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        openDOMElement = document.querySelector("#open");
        doneDOMElement = document.querySelector("#done");
        addButtonDOMElement.addEventListener("click", addTodo);
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        for (let index = 0; index < itodo.length; index++) {
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + itodo[index].check + "'><i class='fas fa-check'></i></span>"
                + itodo[index].task +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
            updateCounter(index);
        }
    }
    function updateCounter(index) {
        /*let i = 0*/
        counterDOMElement.innerHTML = itodo.length + " in total";
        /*if(itodo[index].check == false) {openDOMElement.innerHTML = i ++ + " open"};
        if(itodo[index].check == true) {doneDOMElement.innerHTML = i ++ + " done"}*/
    }
    function addTodo() {
        if (inputDOMElement.value != "") {
            itodo.unshift({ task: inputDOMElement.value, check: false });
            inputDOMElement.value = "";
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        itodo[index].check = !itodo[index].check;
        drawListToDOM();
    }
    function deleteTodo(index) {
        itodo.splice(index, 1);
        drawListToDOM();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map