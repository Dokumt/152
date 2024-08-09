/*Объект аббревиатур (вместо 2-ух массивов)
Индексом служит: Класс элемента <p> (по нему кликает пользователь)
Значение: Элемент <span> (появляется или пропадает после нажатия)
*/
var AbbreviatureArray = 	{	
								hideShow1: document.getElementsByClassName("hide1")[0],  //ClassName возвращается как массив
								hideShow2: document.getElementsByClassName("hide2")[0]
							};

function hideShow() {	
	/*
	Object.keys(AbbreviatureArray) - массив индексов объекта AbbreviatureArray
	event.currentTarget.className - класс элемента, по которому кликнули
	.find(e => e === event.currentTarget.className) - ищем в полученом массиве тот класс (индекс), по которому кликнули
	
	Если класс будет найден if(true), то меняем значение по полученному индексу
	AbbreviatureArray[event.currentTarget.className] - Выбираем объект по нажатому элементу (классу)
										  .classList - Позволяет взаимодействовать с классом
										  .toggle    - добавить или удалить класс
	*/
	if (Object.keys(AbbreviatureArray).find(e => e === event.currentTarget.className)) {
		AbbreviatureArray[event.currentTarget.className].classList.toggle("clicked");
	}
}