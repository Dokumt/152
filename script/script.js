var PDn = document.getElementsByClassName("hide1")[0]; //ClassName возвращается как массив
var NCICC = document.getElementsByClassName("hide2")[0];
var displayPDn = 1;
var displayNCICC = 1

function hideShow() {
	if (displayPDn == 1) {
		PDn.style.display = 'inline';
		displayPDn = 0;
	} else {
		PDn.style.display = 'none';
		displayPDn = 1;
	}
}

function hideShow2() {
	if (displayNCICC == 1) {
		NCICC.style.display = 'inline';
		displayNCICC = 0;
	} else {
		NCICC.style.display = 'none';
		displayNCICC = 1;
	}
}