
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.about = function(req, res){
  res.render('about', { title: 'Express' });
};
exports.education = function(req, res){
  res.render('education', { title: 'Education' });
};
exports.workhistory = function(req, res){
  res.render('workhistory', { title: 'Work History' });
};
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};