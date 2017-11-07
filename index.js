var st = require('stocktwits');

// // without additional parameters
// st.get('streams/user/StockTwits', function (err, res) {
//     console.log(res.body);
// });

// // pass optional parameters
// st.get('streams/user/StockTwits', {limit:15, filter:'links'}, function (err, res) {
//     console.log(res.body);
// });

// // for requests that require authentication
// st.get('streams/friends', {access_token:'token', filter:'charts'}, function (err, res) {
//     console.log(res.body);
// });

st.get('trending/symbols', { limit: 30 }, function(err, res) {
    if (err) {
        broadcast(err);
    }
    broadcast(res.body);
});

// st.get('trending/symbols/equities', {limit:30}, function (err, res) {
// 	if (err) {
// 		broadcast(err);
// 	}
//     broadcast(res.body);
// });

// safe console.log which outputs in the called context - client/server
var broadcast = function(msg) {
    if (typeof console !== 'undefined')
        console.log(msg);
}
