var ref = getRef('ref');
function getRef(name){
	var refParam = ''
	var curUrlParm = window.location.search;
	if(curUrlParm === ""){
		return null;
	}
	if(curUrlParm.indexOf('sp=ad_at2&topic=idb-giveaway&os=desk')> -1){
		refParam = 'sp=ad_at2#topic=idb-giveaway#os=desk'
	}else if(curUrlParm.indexOf('sp=ad_at2&topic=idb-giveaway&os=mobile')> -1){
		refParam = 'sp=ad_at2#topic=idb-giveaway#os=mobile'
	}else{
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		refParam = curUrlParm.substr(1).match(reg);
		if(refParam != null){
			refParam = unescape(refParam[2])
		}
		return refParam;
	}
	return refParam;
}

function addTrack(os, track){
	
}
