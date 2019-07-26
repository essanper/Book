$(document).ready(function() {

	//write all book
	$("#libro").each(function(){
		for (var i = 1; i <= 244; i++) {
			if(i < 9){
				$("#libro").append("<div><img src='./img/000"+i+".jpg'></div>");
			}else if ( i > 9 && i < 99){
				$("#libro").append("<div><img src='./img/00"+i+".jpg'></div>");
			}else if (i > 99) {
				$("#libro").append("<div><img src='./img/0"+i+".jpg'></div>");
			}
		}
	});

    //single book
    $('#libro').booklet({
		closed: true,
		autoCenter:true,
		width: 1200, 
		height: 700,
		covers: true,
		hoverWidth:80,
		pagePadding:0
	});

    $("#buscarPagina").change(function(){
    	$("#libro").booklet("gotopage", $("#buscarPagina").val());
    });
});
    