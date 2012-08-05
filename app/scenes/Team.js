function SceneTeam() {
	this.teamMembers = [];  
}

SceneTeam.prototype.initialize = function () {
           alert("SceneTeam.initialize()");
		   alert(sf.scene);
		   
		//    this.item_width = $('#slides li').outerWidth();
	//	    this.left_value = item_width * (-1); 
}

SceneTeam.prototype.handleShow = function (data) {
           alert("SceneContents.handleShow()");

		   this.teamMembers = data;
		   
		   this.showTeamMembers(this.teamMembers);
		   
		   $('#members li:first').before($('#members li:last'));

		    this.item_width = 100;
		    this.left_value = this.item_width * (-1); 
			
			//this.displayMembers();


}

SceneTeam.prototype.handleHide = function () {
           alert("SceneTeam.handleHide()");
}

SceneTeam.prototype.handleFocus = function () {
           alert("SceneTeam.handleFocus()");
}

SceneTeam.prototype.handleBlur = function () {
           alert("SceneTeam.handleBlur()");
}

SceneTeam.prototype.showTeamMembers = function(data) {

		    for(var i = 0; i < data.length; i++){
				alert(data[i].image_src);
				$('#members').append("<li><img id="+ i +" src=" + data[i].image_src + " /></li>");
			}
}

SceneTeam.prototype.handleKeyDown = function (keyCode) {
         //  alert("SceneMain.handleKeyDown(" + keyCode + ")");
           switch (keyCode) {
                   case sf.key.LEFT:
						empty();
						this.SlidePrev();
                        break;
				   case sf.key.RIGHT:
						empty();
						this.SlideNext();
						break;
				   case sf.key.ENTER:
						var id = $('#members li:nth-child(4) img').attr('id');
						var desc = this.teamMembers[id].description;
						var name = this.teamMembers[id].name;
						var position = this.teamMembers[id].position;
						$('#bio').fadeIn().html("<div class='about'>About:</div>" + desc);
						$('#name').fadeIn().html("<span>Name:</span>" + name);
						$('#position').fadeIn().html("<span>Position:</span>" + position);
						break;
				  case TVKEY.KEY_MENU:
						alert('omg');
				  break;
			}
}

SceneTeam.prototype.SlidePrev = function(){
     
 alert(this.left_value);
		var left_indent = parseInt($('#slides ul').css('left')) - this.item_width;

        $('#members').animate({'left' : this.left_indent}, 200,function(){   
 
            //move the last item and put it as first item              
            $('#members li:first').before($('#members li:last'));          
            //set the default item to correct position

         });
}



SceneTeam.prototype.SlideNext = function(){
		alert(this.item_width);
		var left_indent = parseInt($('#members').css('left')) + this.item_width;
	
	        $('#members').animate({'right' : this.left_indent}, 200,function(){   
 
            //move the last item and put it as first item              
            $('#members li:last').before($('#members li:first'));          
            //set the default item to correct position
         });
        //slide the item      

}

function empty(){

	$('#bio').fadeOut();
	$('#name').fadeOut();
	$('#position').fadeOut();
}