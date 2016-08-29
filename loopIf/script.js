// var nameJS;
//  nameJS = prompt('каково "официальное" название Javascript');

// if (nameJS == 'EcmaScript'){
// 	alert('Верно!');
// } else {
// 	alert("Не знаете? 'EcmaScript'")
// }

// var number = prompt('введите число');
// if (number > 0) {
// 	alert(1);
// } else if (number < 0){
// 	alert(-1);
// } else (number == 0) {
// 	alert(0);
// }

var login = prompt('Введите логин');

if (login == 'админ') {
	var password = prompt('Введите пароль','');
	if ( password == 'Черный Властелин') {
		alert('Добро пожаловать');
	} else if ( password == null){
		alert('Вход отменён');
	} else {
		alert('Пароль неверен');
	}

} else if ( password == null){
	alert('Вход отменён');
} else {
	alert('Я вас не знаю');

}
// result  = (a + b < 4) ? 'Мало' : 'Много';

// message = (login == 'Вася') ? 'Привет' : 
// 	(login == 'Директор') ? 'Здравствуйте' :
// 	(login == '') ?	'Нет логина' : '' ;