/*Объект аббревиатур (вместо 2-ух массивов)
Индексом служит: id элемента <img> (по нему кликает пользователь)
Значение: Элемент <span> (появляется или пропадает после нажатия)
*/
var AbbreviatureArray = 	{	
								hideShow1: document.getElementsByClassName("hide1")[0],  //ClassName возвращается как массив
								hideShow2: document.getElementsByClassName("hide2")[0]
							};

function hideShow() {	
	/*
	Object.keys(AbbreviatureArray) - массив индексов объекта AbbreviatureArray
	event.currentTarget.id - id элемента, по которому кликнули
	.find(e => e === event.currentTarget.id) - ищем в полученом массиве тот id (индекс), по которому кликнули
	
	Если id будет найден if(true), то меняем значения по полученному индексу
	
	Сначала меняем иконку, потом текст
	
	AbbreviatureArray[event.currentTarget.id] - Выбираем объект по нажатому элементу (id)
										  .classList - Позволяет взаимодействовать с классом
										  .toggle    - добавить или удалить класс
	*/
	if (Object.keys(AbbreviatureArray).find(e => e === event.currentTarget.id)) {
		document.getElementById(event.currentTarget.id).classList.toggle("clicked");
		AbbreviatureArray[event.currentTarget.id].classList.toggle("clicked");
	}
}