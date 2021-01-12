// initial gefüllt
var car = [{type: 'Audi', model: 'A5', color: 'Rot'}];

/*
gibt ein auto mit der gewünschten id zurück 
*/


function getCar(id) {
	if (car[id]) {
		document.getElementById('container').innerHTML = 'typ: ' + car[id].type + ' modell: ' + car[id].model + ' farbe: ' + car[id].color;
	
		createMessage('auto wurde dargestellt');
	} else {
		document.getElementById('container').innerHTML = '';
		createMessage('auto wurde nicht gefunden');
	}
}

function addCar(type, model, color) {
	car.push({ type: type, model: model, color: color});

	createMessage('auto wurde erstellt');
}

function createMessage(text) {
	document.getElementById('message').innerHTML = text
}


function changeBgColor() {
	if (document.bgColor === "FF0000") {
		document.bgColor = "FFFFFF";
	} else {
		document.bgColor = "FF0000";
	}
}