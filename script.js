let users = [{name: "Yulian", age: 28, hobby: ["Nature", "Films", "Games", "traveling"], job: ["Softserve", "ITClusterAcademy"]},
             {name: "Olexander", age: 20, hobby: ["fishing", "hiking", "football"], job: null, dreams: [] }];
let question, details, detail, newDetails = {};
let newObj = {name: "Nature/change? ", actual: true/false,  types: ["qwe", "qwe"], closestTime: "02.10.2020"};
//Вивести назви полів де є масиви
users.forEach(i => {
   // console.log(users, i);
    for (key in i) {
        // console.log(key, i);
        // console.log(i[key]);
        if (Array.isArray(i[key])) {
        //console.log(key);
        question = confirm(`Бажаєте змінити значення ${key}?`);
        if (question) {
            for (let j = 0; j < i[key].length; j++) {
                details = confirm(`Підтверджуєте ${i[key][j]}?`);
                if (!details) {
                    if (confirm(`Чи ви хочете змінити значення ${i[key][j]}`)) {
                        newDetails.name = prompt ('Введіть нове значення');
                    } else {
                        newDetails.name = i[key][j];
                    }
                    newDetails.actual = confirm('Актально?');
                    newDetails.types = prompt(`Які типи є актуальні для вас?`);
                    newDetails.closestTime = prompt('Найближча можливість?');
                    i[key][j] = newDetails;
                }
            }
        }
        }
    } 
})
console.log(users);
// Зробити запит в юзера по кожному з них чи бажає він їх змінювати?
// Якщо так то Дати можливість юзеру записати більш детально по кожному пункту з масиву
// (перед цим також треба вивести які ключі в масиві є і чи хоче він їх змінювати послідовно)
// Якщо юзер хоче додати більше інформації ми ці дані маємо зберегти в обєкті наступного вигляду - 
// {name: "Nature/change? ", actual: true/false,  types: ["qwe", "qwe"], closestTime: tomorrow/ 02.10.2020}. 
// Вивести фінальну колекцію після всіх змін. 
