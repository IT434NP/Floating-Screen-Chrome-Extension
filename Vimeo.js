function validateVimeoUrl(url) {    
    //var url = $('#url_main').val();
    if (url != undefined || url != '') {
        var regExp = /(http|https)?:\/\/(www\.|player\.)?vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|video\/|)(\d+)(?:|\/\?)/;
        var match = url.match(regExp);
        if (match && match[4].length == 9) {
            //alert('valid');
            var h1=window.open('https://player.vimeo.com/video/'+match[4]+'?autoplay=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen',"Floating_Player","channelmode=yes, resizable=yes,top=90,left=160,width=480,height=270");
            let port = null;
           	port = chrome.runtime.connectNative('com.floatingscreen');
        }
    }
    else{
    	alert("Enter valid URL");
        window.open("window.html");
    }
}