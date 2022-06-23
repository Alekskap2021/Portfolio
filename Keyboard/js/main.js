let allKey = document.querySelectorAll(".key");
let num = document.querySelectorAll(".num .key");

function tap(e) {
  for (let key in allKey) {
    console.log(e.keyCode);
    console.log(e.key);
    console.log(e);
    // Буквы и цифры
    let code = e.key.toUpperCase();
    if (allKey[key].classList.contains(`key${code}`) == true) {
      allKey[key].classList.add(`active`);
    }
    // Исключения для - и /
    if (allKey[key].classList.contains(`key${e.code}`) == true) {
      allKey[key].classList.add(`active`);
    }
    //функц. клавиши
    // else if (allKey[key].classList.contains(`key${e.key}`) == true) {
    // 	allKey[key].classList.add(`active`);
    // }
    // Numpad
    else if (allKey[key].classList.contains(`keyNum${e.key}`) == true) {
      allKey[key].classList.add(`active`);
    } else if (allKey[key].classList.contains(`keyNum${e.keyCode}`) == true) {
      allKey[key].classList.add(`active`);
    }
  }
}

function tap2(e) {
  for (let key in allKey) {
    if (allKey[key].classList.contains(`active`)) allKey[key].classList.remove(`active`);
  }
}

document.onkeydown = tap;
document.onkeyup = tap2;
