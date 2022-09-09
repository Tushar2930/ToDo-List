const List = require("../models/list");
module.exports.home = function (req, res) {

    List.find({}, function (err, lists) {
        if (err) {
            console.log("ERROR");
            return;
        }
        return res.render("home", {
            title: 'TASKS PENDING',
            lists: lists
        });
    })

}

module.exports.create = function (req, res) {

    List.create({
        task: req.body.task,
        category: req.body.category,
        date: req.body.date
    }, function (err, newlist) {
        if (err) {
            console.log("error");
            return;
        }
        console.log("****", newlist);
        return res.redirect("/");
    });
}