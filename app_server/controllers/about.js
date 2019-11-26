/* GET home page */
const about = function(req, res){
  res.render('generic-text', {
    title: 'About TripAdviceKerry',
    content: 'Looking to visit a famous landmark in Kerry?. You have come to the right place. TripAdviceKerry was created to help people find exciting places to visit while either out for the day with family or as a tourist exploring the county of Kerry.'
  });
};

module.exports = {
  about
};