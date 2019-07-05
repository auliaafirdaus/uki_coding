const express = require('express');
const router = express.Router();


const EmployeeController = require('../controllers/employees');

router.get('/', EmployeeController.employeeGetAll);

router.post('/', EmployeeController.employeeCreate);

router.get('/:id', EmployeeController.employeeGetById);

router.delete('/:id', EmployeeController.employeeDelete);

router.put('/:id', EmployeeController.employeeUpdate);


module.exports = router;