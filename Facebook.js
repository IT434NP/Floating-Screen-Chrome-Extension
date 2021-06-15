function validateFacebookUrl(url) {    
    //var url = $('#url_main').val();
    if (url != undefined || url != '') {
        var regExp = /^https?:\/\/www\.facebook\.com\/facebook\/videos\/(\d+)(?:|\/\?)/;
        var match = url.match(regExp);
        //alert(match);
        if (match) {
            //alert(match);
            var h1=window.open(url,"Floating_Player","channelmode=yes,resizable=yes,top=90,left=160,width=480,height=270");
            let port = null;
           	port = chrome.runtime.connectNative('com.floatingscreen');
        }
    }
    else{
    	alert("Enter valid URL");
        window.open("window.html");
    }
}