const express = require('express');
const app = express();

// Клиентская часть
app.use(express.static('Client'));
//app.use('/static', express.static(__dirname + '/Client'));

const path = require('path');

app.get('*', (req, res) => {

res.sendFile(path.resolve(__dirname, 'Client', 'index.html'));
});


const PORT = process.env.PORT || 3000;
console.log('server started on port:', PORT);
app.listen(PORT);

/* 
let test = function() {

    let arr = ['Взломанно: 3%', 'Взломанно: 5%', 'Взломанно: 6%', 'Взломанно: 8%', 'Взломанно: 10%', 'Взломанно: 14%', 'Взломанно: 30%', 'Взломанно: 39%', 'Взломанно: 69%', 'Взломанно: 70%', 'Взломанно: 98%', 'Взломанно: 98.4%', 'Взломанно: 98.6%', 'Взломанно: 99%', 'Неудача, ты плохой хацкер']

    let interval = setInterval(function() {
          if (arr.length === 0) {
            clearInterval(interval);
          } else {
            // вывод сообщения
            console.log(arr.shift());
          }
        }, 1500);
        

} ();
 */