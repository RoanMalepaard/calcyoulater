// buttons 
const $clear = document.getElementById('c');

const RESULT  = document.getElementById('result');


// handlers
const ClearHandler = function () {
     RESULT.innerHTML = 0;
}







//handle clicks
$clear.onclick = ClearHandler;