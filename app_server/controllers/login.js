/* GET home page */
const login = function(req, res){
  res.render('login-page', {
    title: 'Login to your account here',
    content: ''	
	
  });
};

module.exports = {
  login
};