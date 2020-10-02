let varList = document.querySelectorAll("input.inp");

let inputId = 2;

let egg = ["кушать", "быть", "мама", "папа", "с понедельника", "в понедельник", "понедельник" ]

let startBarrel = () => {
    let varText = [];
    varList.forEach((element) => {
        let elem = element.value.toLowerCase();

            if (elem == "кушать") {
                alert("Сесть на диету !");
            } else if (elem == "быть") {
                alert("Будь, ну и кушай :)");
            } else if (elem == "мама" || elem == "папа") {
                alert("Родителей не выбирают.");
            } else if (elem == "понедельник" || elem == "с понедельника" || elem == "в понедельник") {
                alert("Зачем откладывать? Давай сегодня!");
            }


            if (element.value == null) {
                let id = element.id;
                document.getElementById(id).remove();
            } else {
                let e = element.value;
                varText.push(e);
            }       
        });



    let result = varText[Math.floor(Math.random() * varText.length)];
    alert(result);
    document.location.reload();
}

let addInput = () => {
    let newInput = document.createElement("input");
    newInput.className = "inp";
    inputId += 1;
    newInput.id = inputId;

    let list = document.getElementById("inputs")
    list.appendChild(newInput);
}





/*=====================================================================================*/

let proverbs = [
    "Подумав съесть, не думай - ешь!",
    "Как с казал Даниил: Давай быстрее, скоро ночь настанет!",
    "Если ты не вынес мусор, значит ты еще дома."
]
let getproverb = () => {
    let result = proverbs[Math.floor(Math.random() * proverbs.length)];
    alert(result);
}