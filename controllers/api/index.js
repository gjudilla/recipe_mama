const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes.js');
const pantryRoutes = require('./pantryRoutes.js')
const userRoutes = require('./userRoutes.js')

router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes)
router.use('/pantry', pantryRoutes)

module.exports = router;
