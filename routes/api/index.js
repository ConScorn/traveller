const router = require('express').Router();
const tripRoutes = require('./tripRoutes');
const travellerRoutes = require('./travellerRoutes');

router.use('/trips', tripRoutes);
router.use('/traveller', travellerRoutes);

module.exports = router;