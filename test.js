const putMosaic = require('./bc/putmosaicdb.js');
const getAccessToken = require('./tmtm/getaccesstoken.js');
const gettmtm = require('./tmtm/gettmtm.js');

var request = require('/usr/local/lib/node_modules/request');

var dataid = "A";

for(let i = 0; i < 200; i++){

  var userid = "u" + i;

var accesstoken = getAccessToken.getAccessToken(userid);
var getmtm = gettmtm.getmtm(userid,dataid,accesstoken);

var backdata = getmtm.data;

var putMosaic = putMosaic.toMosaicManage(userid,backdata);

}
