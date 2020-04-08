exports.getAccessToken = function(userid){

var request = require('/usr/local/lib/node_modules/request');

var bodydata = {
	"username": userid
}

var frontoptions = {
	url: 'https://5evy1cfkrh.execute-api.us-east-2.amazonaws.com/develop/gettokenbyusername',
	method: 'POST',
	json : bodydata

}

request(frontoptions, function (error, response, body) {
	//console.log(response);
	//console.log(body.resultcode);
	//console.log(body.dynamoresult.dataid);
	//permissionmosaic = 'sakastudio.quicalscore.' + body.dynamoresult.dataid

	//mtmdata = {"datamosaic": "sakastudio.quicalscore.nft1",
		//"permissionmosaic": permissionmosaic,
		//"data": body.dynamoresult.data
    var dataresult = body.dynamoresult.accesstoken;
	}

return dataresult;
}
