function onStart() {    
    var arrPathToIncluded = new Array();
    arrPathToIncluded.push('app/controller.js');

    sf.core.loadJS(arrPathToIncluded, function(){    
        Controller.initialize();    
        Controller.start();    
    });    
}    
  
function onDestroy () {    
    // stop your XHR or Ajax operation and put codes to distroy your application here    
}