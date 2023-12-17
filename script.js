function createHeadlineSection(){
    const headlineSection = document.createElement("div");
    const inputLine = document.createElement("p");

    inputLine.textContent = "How broad is your field?";
    const input = document.createElement("input");
    input.type = "text";
    input.id = "fieldSizeInput"
    const btn = document.createElement("button");
    btn.textContent = "Create Field";
    btn.id = "createFieldButton";


    document.body.appendChild(headlineSection);
    headlineSection.appendChild (inputLine);
    headlineSection.appendChild(input);
    headlineSection.appendChild(btn);
}


function createRow(fieldName){
    const rowSection = document.createElement("div");
    rowSection.style.display = "flex";
    fieldName.appendChild(rowSection);
    return rowSection;
};

function createColumn(rowSection){
    const columnSection = document.createElement("div");
    columnSection.style.backgroundColor = "pink";
    columnSection.style.width = "50px"; // Set a fixed width
    columnSection.style.height = "50px"; // Set a fixed height
    columnSection.style.margin = "1px"; // Add some margin for spacing 

    rowSection.appendChild(columnSection);

};

function createField(numberOfFields){
    const field = document.createElement("div");
    document.body.appendChild(field);

    // Event delegation for mouseover and mouseout
    field.addEventListener("mouseover", function(event){
        if (event.target.tagName === 'DIV') { // Check if the target is a div
            event.target.style.backgroundColor = "purple";
            clearTimeout(event.target.timer); // Clear any existing timer
        }
    });

    field.addEventListener("mouseout", function(event){
        if (event.target.tagName === 'DIV') {
            event.target.timer = setTimeout(function(){
                event.target.style.backgroundColor = "pink";
            }, 1000);
        }
    });



    for (let i = 0; i < numberOfFields; i++){
        let row = createRow(field);
        for (let j = 0; j < numberOfFields; j++){
            createColumn(row)
        }
    }
    return field;

};



//main
createHeadlineSection();
let fieldContainer = createField(12);

document.querySelector("#createFieldButton").addEventListener("click", function(){
    const numberOfFields = parseInt(document.querySelector("#fieldSizeInput").value, 10);
    if (!isNaN(numberOfFields) && numberOfFields > 0) {
        document.body.removeChild(fieldContainer);
        fieldContainer = createField(numberOfFields);
    } else {
        alert("Please enter a valid number");
    }
});