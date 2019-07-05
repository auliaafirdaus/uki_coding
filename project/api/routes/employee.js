const express = require('express');
const router = express.Router();


const EmployeeController = require('../controllers/employees');

router.get('/', EmployeeController.employeeGetAll);

router.post('/', EmployeeController.employeeCreate);

router.get('/:id', EmployeeController.employeeGetById);

router.delete('/:id', EmployeeController.employeeDelete);

module.exports = router;