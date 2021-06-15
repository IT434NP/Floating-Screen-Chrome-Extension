function validateTedUrl(url) {    
    //var url = $('#url_main').val();
    if (url != undefined || url != '') {
        var regExp = /ted\.com\/talks\/(.+)/;
        var match = url.match(regExp);
        //alert(match);
        if (match) {
            alert(match[0]);
            var h1=window.open('https://embed.'+match[0]+'style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen',"Floating_Player","channelmode=yes,resizable=yes,top=90,left=160,width=480,height=270");
            let port = null;
           	port = chrome.runtime.connectNative('com.floatingscreen');
        }
    }
    else{
    	alert("Enter valid URL");
        window.open("window.html");
    }
}