(function () {

var fsicon = document.createElement('button');
fsicon.innerHTML = "FULL SCREEN"
fsicon.value = "FULL SCREEN"
// var srcFSI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAI1JREFUeNrsV0EOwCAI6w/8/6lP8gk8ZTuPLUoirltCEy8mpY0iIAAcg0WsgxONreIRE4+bhnzYr05AkgO2wQQHV3wxwAmBieJe6xY8w0Q0BlcDZHOngXqA1zPziE68BTjNmWDGM4qKexNEoVAoJPVzWSGSlmJpM3q1HcsHEvlI9omhtL5m9TWT5cApwAD/IigEZttSgAAAAABJRU5ErkJggg==';
// var srcFSIexit = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgEApAAAAAZ0Uk5TAA+fz9/vpTOW9gAAAJNJREFUKM/NkkEKwyAUBSeeQOoFDAX3duERcoQcQJN3/yN08RVLUui2fyE4Ph/IyPLiY56eoDj3TpmiOkFSI2lEPE6qtgSA3A+TtBaA9pAq4KRTANr77SQZUO93E1j9sg9wegDCTGQAygTN80fz+3FsAxx8T1w7nHQY2CySpJgAqpMq3QVANA3mwo/6eld5k339Dm89PDdxiEGVaQAAAABJRU5ErkJggg==';
// fsicon.src = srcFSI;
fsicon.id = 'fsicon';

fsicon.style.opacity = 0.9;
fsicon.style.filter = 'alpha( opacity=5000 )';
fsicon.style.cursor = 'pointer';
fsicon.style.zIndex = 2000;
fsicon.style.top = '10px';
fsicon.style.right = '10px';
fsicon.style.position = 'fixed';
	
	
var cto; 
fsicon.style.transitionDuration = '1s'; 
document.onmousemove = function(){ 
	clearTimeout(cto); 
	fsicon.style.opacity = 0.9;  
	cto = setTimeout(function(){fsicon.style.opacity = 0;},5000);
}

var isfullscreen
document.body.appendChild(fsicon);


    var fsicon = document.getElementById("fsicon");

    

    if (fsicon) {
        fsicon.addEventListener("click", function () {
		  if(fsicon.getAttribute('value')==="FULL SCREEN"){
		  		console.log('hello')
				var docElm = document.documentElement;
				if (docElm.requestFullscreen) {
					docElm.requestFullscreen();
				}
				else if (docElm.mozRequestFullScreen) {
					docElm.mozRequestFullScreen();
				}
				else if (docElm.webkitRequestFullScreen) {
					docElm.webkitRequestFullScreen();
				}
			}else{
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
				else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				}
				else if (document.webkitCancelFullScreen) {
					document.webkitCancelFullScreen();
				}
			}
			
        }, false);
    }
    if (fsicon) {
        document.addEventListener("fullscreenchange", function () {
			 if(document.fullscreenElement){
				fsicon.setAttribute('value',"EXIT FULL SCREEN");
				fsicon.innerHTML = 'EXIT FULL SCREEN'
				document.getElementById('whole_chat').style.marginTop = 400 + 'px'
			 }else{
				fsicon.setAttribute('value',"FULL SCREEN");
				fsicon.innerHTML = "FULL SCREEN"
				document.getElementById('whole_chat').style.marginTop = 350 + 'px'
				// if(fsicon.value = "EXIT FULL SCREEN"){
				// 	alert("Change to full screen.Closing window in 10 seconds")
				// 	setTimeout(function() {
				// 		if(fsicon.value = 'EXIT FULL SCREEN'){
				// 			window.close()
				// 		}
						
				// 	}, 10000)
				// }
			 };
			
        }, false);
        
        document.addEventListener("mozfullscreenchange", function () {
			if(document.mozFullScreen){
				fsicon.setAttribute('value',"EXIT FULL SCREEN");
				fsicon.innerHTML = 'EXIT FULL SCREEN'
				document.getElementById('whole_chat').style.marginTop = 400 + 'px'
			 }else{
				fsicon.setAttribute('value',"FULL SCREEN");
				fsicon.innerHTML = "FULL SCREEN"
				document.getElementById('whole_chat').style.marginTop = 350 + 'px'
				// if(fsicon.value = "EXIT FULL SCREEN"){
				// 	alert("Change to full screen.Closing window in 10 seconds")
				// 		if(fsicon.value = 'EXIT FULL SCREEN')
				// 		window.close()
				// }
			 };
        }, false);
        
        document.addEventListener("webkitfullscreenchange", function () {
			if(document.webkitIsFullScreen){
				fsicon.setAttribute('value',"EXIT FULL SCREEN");
				fsicon.innerHTML = 'EXIT FULL SCREEN'
				document.getElementById('whole_chat').style.marginTop = 400 + 'px'
			 }else{
				fsicon.setAttribute('value',"FULL SCREEN");
				fsicon.innerHTML = "FULL SCREEN"
				document.getElementById('whole_chat').style.marginTop = 350 + 'px'
			 };
        }, false);
    }
    
})();
var countt=10;
setInterval(function(){ 
	var isFullScreen;
	isFullScreen = document.fullscreen;
	if(isFullScreen == false)
	{   
		alert("Switch to Full Screen.Exiting in "+countt+" seconds.");
		//countt=countt-5;
		setTimeout(function(){
			isFullScreen = document.fullscreen;
			if(isFullScreen == false || countt<=0)
				
			window.close();
		},10000)
		
	}
	 }, 15000);

 // window.onload= function(){
 // 		alert('Change to full screen.Else you will be exited automatically')
 // 		if(fsicon.value = "EXIT FULL SCREEN"){


 //    		// setTimeout(function() {
 //    		// 	if(fsicon.value = "EXIT FULL SCREEN")
 //    		// 		window.close()
 //    		// }, 10000)
 //    	}
 //    }

// document.addEventListener('fullscreenchange', function() {
// 	console.log(fsicon.value)
	

// })
