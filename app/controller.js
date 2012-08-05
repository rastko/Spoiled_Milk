var Controller = {
	 categoryData: [] 
}

Controller.initialize = function () {
    alert("Controller.initialize()");
}

Controller.start = function () {
    alert("Controller.start()");
    sf.scene.show('Main');
	sf.scene.focus('Main');
} 

Controller.showTeam = function () {

	Controller.ParseXML("XML/team.xml");

}

Controller.ParseXML = function (categoryurl) {
    alert("Controller.ParseXML()");
    this.categoryData = [];

    var count = 0;
    var _THIS_ = this;

    $.ajax({
           type: "get"
           ,dataType: "xml"
           ,url: categoryurl
           ,success: function(xml){
               if($(xml).find("member").length > 0){
                   $(xml).find("member").each(function(){ // loop
				   
                       var t_name = $(this).find("name").text();
                       var t_image_src = $(this).find("image_src").text();
					   var t_position = $(this).find("position").text();
					   var t_description = $(this).find("description").text();

                       var oArticle = {};
                       oArticle.name = t_name;
					   oArticle.position = t_position;
					   oArticle.image_src = t_image_src;
                       oArticle.description = t_description;

                       _THIS_.categoryData.push(oArticle);

                        count++;
                   });

					sf.scene.show('Team', _THIS_.categoryData);
					sf.scene.focus('Team');
               }
           }
           ,error: function(){ alert("xml error!!"); }
    });
	
	
}