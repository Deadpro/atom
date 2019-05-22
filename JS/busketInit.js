var cart;
var config;
var wiNumInputPrefID;

$(document).ready(function(){
   cart = new WICard("cart");
   config = {'clearAfterSend':true, 'showAfterAdd':false};
   cart.init("basketwidjet", config);
});
document.addEventListener('visibilitychange', function(e) {
cart.init("basketwidjet", config);
}, false);
