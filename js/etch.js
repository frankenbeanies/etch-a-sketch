
$(document).ready(function(){
	drawGrid(16, 16);
	$("#reset").click(function(){
		resetGrid();
	});
});

function drawGrid(dim, pixelsize){
	$("#container").width((dim*pixelsize) + dim*2);
	for(i = 0; i < dim; i++){
		for(j = 0; j < dim; j++){
			var $div = $("<div class='grid'></div>");
			$div.height(pixelsize);
			$div.width(pixelsize);
			$("#container").append($div);
		}
		$("#container").append("<br />");
	}
}

function resetGrid(){
	var dim = prompt("How many squares would you like on each side?");
	var pixelSize = prompt("How many pixels wide/tall would you like each square to be?");
	$("#container").empty();
	drawGrid(dim, pixelSize);
}


$(document).on("mouseenter", ".grid", function(){
	$(this).toggleClass("black");
});