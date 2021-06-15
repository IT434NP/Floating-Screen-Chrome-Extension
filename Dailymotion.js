function validateDailymotionUrl(url) {    
    //var url = $('#url_main').val();
    if (url != undefined || url != '') {
        var regExp = /(?:dailymotion\.com(?:\/video|\/hub)|dai\.ly)\/([0-9a-z]+)(?:[\-_0-9a-zA-Z]+#video=([a-z0-9]+))?/;
        var match = url.match(regExp);
        //alert(match[1]);
        if (match) {
            //alert(match);
            var h1=window.open('https://www.dailymotion.com/embed/video/'+match[1]+'?autoplay=1" width="100%" height="100%" allowfullscreen allow="autoplay',"Floating_Player","channelmode=yes,resizable=yes,top=90,left=160,width=480,height=270");
            let port = null;
           	port = chrome.runtime.connectNative('com.floatingscreen');
        }
    }
    else{
    	alert("Enter valid URL");
        window.open("window.html");
    }
}