$("#sidenavpills a").click(function(){
	$("#sidenavpills a").removeClass("sidepillactive");
	$(this).toggleClass("sidepillactive");
});
$( function() {
	$("#sidebar").resizable({ 
	    handles:"e",
		
	});
	$("#main").resizable({
		handles:"n,e,s,w"
	});
	$("#sortable").sortable();
	
	
	
	$("#textv span").click(function(){
	    $textv = $("<div class='hidden' style='height:20px'><p>I am a great text!</p></div>");
		$("#main").append($textv);
        $( $textv ).draggable({containment:"#main",scroll:true,});
		$($textv).css("display","block");
        var textplace = $("#textplace").val();
		$($textv).css("position","absolute");
	    $($textv).css("top",textplace*470);	
	    $($textv).css("right","0px");
		
		
		
	});
	
	

	
	$("#main").on('dblclick',function(event){
		if(!$(event.target).is("#rightbar") &&!$(event.target).is("#submain") && !$(event.target).is("#main")){
		$(event.target).remove();
		}
	});
	
	
	
	$("#navv").click(function(){
		var $navv = $('<nav class="navbar navbar-toggleable-md navbar-inverse bg-primary"><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><a class="navbar-brand" href="#">Navbar</a><ul class="navbar-nav mr-auto"><li class="nav-item "><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="#">Link</a></li></ul><form class="form-inline my-2 my-lg-0"><input class="form-control mr-sm-2" type="text" placeholder="Search"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></form></div></nav>')
		$("#submain").append($navv);
		$($navv).css("position","absolute");
		$($navv).css("top","0px");
		$($navv).css("width","100%");
		$($navv).css("display","block");
	});
	
	$("#divisionv span").click(function(){
	    var $divisionv = $("<div  class='hidden' class='ui-widget-content' style='width:100px;height:100px;border:1px solid black'><p>Text inside div!</p></div>");
		$("#main").append($divisionv);
        $( $divisionv ).draggable();
		$($divisionv).resizable({handles:"n,e,s,w"});
		$($divisionv).css("display","block");
		var textplace = $("#textplace").val();
		$($divisionv).css("position","absolute");
		$($divisionv).css("top",textplace*470);
		$($divisionv).css("right","0px");
	});
	
	$("#listv span").click(function(){
		var numlist = $("#numlist").val();
	    var $listv = $("<ul class='list-group'></ul>");
		for(var i=0;i<numlist;i++){
		$($listv).append("<li class='list-group-item'>One</li>");
	    }
		$("#main").append($listv);
        $( $listv ).draggable();
		$($listv).resizable({handles:"n,e,w,s"});
		var textplace = $("#textplace").val();
		$($listv).css("position","absolute");
		$($listv).css("top",textplace*470);
		$($listv).css("right","0px");
	});
	
	$("#accordionv span").click(function(){
	    $accordionv = $("<div id='accordion'><h3>Section 1</h3><div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat sagittis laoreet. Curabitur aliquet placerat lectus, nec placerat ex dignissim et. Sed ultricies turpis nunc, ac vehicula neque</p></div><h3>Section 2</h3><div><p>sagittis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum pellentesque nisi, sed laoreet mi mattis malesuada. Curabitur enim elit, facilisis</p></div><h3>Section 3</h3><div><p>ac scelerisque et, facilisis eu eros. Sed commodo sodales nisi, a fringilla massa feugiat sed.Suspendisse faucibus tempus egestas. Pellentesque et quam vel odio consectetur pellentesque et</p></div><h3>Section 4</h3><div><p>quis orci. Quisque sagittis tortor lectus, et euismod turpis porttitor eget. Integer in dolor viverra,dignissim orci et, pellentesque justo. Praesent nisi leo, sollicitudin ut quam at, vulputate porttitor</p></div></div>");
		$("#main").append($accordionv);
        $( $accordionv ).draggable();
		$($accordionv).css("display","block");
		var textplace = $("#textplace").val();
		$($accordionv).css("position","absolute");
		$($accordionv).css("top",textplace*470);
		$($accordionv).css("right","0px");
		$("#accordion").accordion();
		$($accordionv).css("width","30%");
		$($accordionv).css("height","100px");
	});
	
	$("#submain").click(function(){
	    var htmlContents = document.documentElement.innerHTML;
        localStorage.setItem('myBook', htmlContents );
	});
  } );