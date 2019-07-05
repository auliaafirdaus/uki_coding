const mongoose = require('mongoose');
const Employee = require("../models/employee");

exports.employeeGetAll = (req, res, next) => {
    Employee.find()
    .then(result => {
        res.status(200).json({
            data: result
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    });
}

exports.employeeGetById = (req, res, next) => {
    Employee.findById(req.params.id)
    .then(result => {
        if(!result) {
            return res.status(404).json({
                result: {
                    message: 'Not Found'
                }
            })
        }
        res.status(200).json({
            data: result
        })
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

exports.employeeCreate = (req, res, next) => {
    const employee = new Employee({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        department: req.body.department,
    })
    employee.save()
    .then(result => {
        res.status(201).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}


exports.employeeDelete = (req, res, next) => {
    const id = req.params.id;
    Employee.remove({ _id: id })
    .then( result => {
        res.status(200).json({
            result: result
        });
    })
    .catch( err => {
        res.status(500).json({
            error: err
        })
    });
}

exports.employeeUpdate = (req, res) => {
    const id = req.params.id;
    const employee = {
        name: req.body.name,
        department: req.body.department
    };
    Employee.update({_id:id}, employee,{new:true})
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}