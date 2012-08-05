function SceneMain() {
}

SceneMain.prototype.initialize = function () {
           alert("SceneMain.initialize()");
		   alert(sf.scene);
}

SceneMain.prototype.handleShow = function (data) {
           alert("SceneMain.handleShow()");
}

SceneMain.prototype.handleHide = function () {
           alert("SceneMain.handleHide()");
}

SceneMain.prototype.handleFocus = function () {
           alert("SceneMain.handleFocus()");
}

SceneMain.prototype.handleBlur = function () {
           alert("SceneMain.handleBlur()");
}

SceneMain.prototype.handleKeyDown = function (keyCode) {
           alert("SceneMain.handleKeyDown(" + keyCode + ")");
           switch (keyCode) {
                   case sf.key.LEFT:
						$('#navMenu a.active').removeClass('active').prev().addClass('active');
                        break;
				   case sf.key.RIGHT:
						$('#navMenu a.active').removeClass('active').next().addClass('active');
						break;
				   case sf.key.ENTER:
					   sf.scene.hide('Main');
					   Controller.showTeam();
						break;
           }
} 