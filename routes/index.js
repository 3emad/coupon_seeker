
/*
 * GET home page.
 */


var menu = [{name: '1'},{name: '2'}];
//var sio = io.listen(app);

exports.index = function(req, res){
        var views = {};
        /*
		var lat = latlon.latitude[2];
		console.log("lat : " + lat);
		var lon = latlon.longitude[2];
		console.log("lon : " + lon);
        
        var views = {
            lat:lat,
            lon:lon,
            zoom:12
        }; */
  /*
    sio.sockets.on('connection', function (socket) {
        socket.emit('news', { hello: 'world' });
        socket.on('my other event', function (data) {
            console.log(data);
        });
    });
    */
  //sio.sockets.in(req.sessionID).send('Man, good to see you back
  res.render('index.html', { views: views })
};
/*
exports.deals = function(req,res){
    //https://api.groupon.com/v2/deals.json?lat =&lng&client_id=89f5d79b058d923dd62e7129ce81be76de0b5629  
};
*/