function validateYouTubeUrl(url) {    
    //var url = $('#url_main').val();
    if (url != undefined || url != '') {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            //alert('valid');
            var h1=window.open('https://www.youtube.com/embed/' + match[2] + '?autoplay=1&enablejsapi=1',"Floating_Player","channelmode=yes, resizable=yes,top=90,left=160,width=430,height=270");
            let port = null;
           	port = chrome.runtime.connectNative('com.floatingscreen');
            //h1.setAlwaysOnTop(true);
   		}
	}
    else{
    	alert("Enter valid URL");
        window.open("window.html");
    }
}