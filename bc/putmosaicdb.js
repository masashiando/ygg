exports.toMosaicManage = function(userid,bodydata){

const gettingAccountMosaic = require('../typescript/account/gettingAccountMosaic.js');
const request = require('/usr/local/lib/node_modules/request');

var datamosaic = gettingAccountMosaic.getMosaicFromId("MAON6I-456XJS-TLQD4G-5JYX66-5AYCTJ-G5JEJG-VQGU")

var permission = gettingAccountMosaic.getMosaicFromId("MAON6I-456XJS-TLQD4G-5JYX66-5AYCTJ-G5JEJG-VQGU")

tmtmdata = {
  "datamosaic": "sakastudio.quical." + userid,
  "permissionmosaic": "sakastudio.quical.score",
  "data": bodydata
}

var backoptions = {
  url: 'https://5evy1cfkrh.execute-api.us-east-2.amazonaws.com/develop/v2/writemosaic',
  method: 'POST',
  json: tmtmdata
}
request(backoptions, function (error, response, body) {
return body;
})
}
