document.getElementById("myButton").addEventListener("click", identify_URL);
function identify_URL(){
	var url = $('#url_main').val();
	if(url!="" && !(url.includes('file:///'))){
		if(url.includes('youtube.')){
		validateYouTubeUrl(url);
		}else if(url.includes('vimeo.')){
			//alert('inside PDF');
			validateVimeoUrl(url);
		}else if(url.includes('ted.com')){
			//alert('inside PDF');
			validateTedUrl(url);
		}else if(url.includes('facebook.com')){
			//alert('inside PDF');
			validateFacebookUrl(url);
		}else if(url.includes('dai.ly')){
			//alert('inside PDF');
			validateDailymotionUrl(url);
		}else if((url.substring(url.length-5,url.length)).localeCompare('.pdf')){
			//alert('inside PDF');
			validatePDF(url);
		}else{
			validateWebsite(url);
		}window.close();
	}
	else{
		alert("Please enter a valid link");
		document.getElementById("url_main").value="";
	}
}

