
/*
 * GET home page.
 */
var menu = [{name: '1'},{name: '2'}];
exports.index = function(req, res){
  res.render('index.html', { /*layout: false,*/ title: 'Express', menu: menu })
};