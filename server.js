var kiwi_app = './server/kiwi.js';
require(kiwi_app);


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 

console.log( "Listening on " + server_ip_address + ", port " + server_port )
