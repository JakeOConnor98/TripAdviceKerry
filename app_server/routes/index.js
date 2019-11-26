const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlLogin = require('../controllers/login');
const ctrRegister = require('../controllers/register');
const ctrAbout = require('../controllers/about');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid', ctrlLocations.locationInfo);
router
  .route('/location/:locationid/review/new')
  .get(ctrlLocations.addReview)
  .post(ctrlLocations.doAddReview);


/* Other pages */
router.get('/login', ctrlLogin.login);
router.get('/register', ctrRegister.register);
router.get('/about', ctrAbout.about);

module.exports = router;
