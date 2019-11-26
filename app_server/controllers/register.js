/* GET home page */
const register = function(req, res){
  res.render('register-page', {
    title: 'Register for a account here',
	content: ''
  });
};

module.exports = {
  register
};