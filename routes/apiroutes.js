const db = require('../models')

module.exports = (function (app) {
    app.get('/api/workouts', (req,res) => {
        db.Workout.find()
            .then(activity => {
                res.json(activity)
            }).catch(err => {
                res.json(err)
            })
    })

    app.get('/api/workouts/range', (req,res) => {
        db.Workout.find({}).limit(5)
        .then(activity => {
            console.log(activity)
            res.json(activity)
        }).catch(err => {
            res.json(err)
        })
    })

    app.post('/api/workouts', (req,res) => {
        db.Workout.create({})
            .then(activity => {
                res.json(activity)
            }).catch(err => {
                res.json(err)
            })
    })
    
    app.put('/api/workouts/:id', ({body, params },res) => {
        db.Workout.findByIdAndUpdate(params.id,{ $push: { exercises: body } })
            .then(activity => {
                res.json(activity)
            }).catch(err => {
                res.json(err)
            })
    })

})
