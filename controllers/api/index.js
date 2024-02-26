const router = require('express').Router();

const dashboardRoutes = require('./dashboardRoutes.js');
const pantryRoutes = require('./pantryRoutes.js')
// const pantry2Routes = require('./pantry2Routes.js')
const userRoutes = require('./userRoutes.js')


router.use('/dashboard', dashboardRoutes);
router.use('/users', userRoutes)
router.use('/pantry', pantryRoutes)
// router.use('/pantry2', pantry2Routes)

module.exports = router;
