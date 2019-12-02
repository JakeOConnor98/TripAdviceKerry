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


/* Login page */
router
  .route('/login')
  .get(ctrlLogin.login)
  .post(ctrlLocations.login);

  /* Register page */
router
  .route('/register')
  .get(ctrRegister.register)
  .post(ctrlLocations.doAddUser);

router.get('/about', ctrAbout.about);

module.exports = router;
