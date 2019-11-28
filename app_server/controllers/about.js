/* GET home page */
const about = function(req, res){
  res.render('about', {
    title: 'About TripAdviceKerry'
  });
};

module.exports = {
  about
};