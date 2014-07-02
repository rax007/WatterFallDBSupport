var mongoose = require('mongoose'),
    async = require('async');

mongoose.connect("mongodb://localhost/test", function (err, result) {
    if(err){
        console.log(err);
    }else{
        console.log("Successfully Connected ");
    }
});

var studentSchema = new mongoose.Schema({name: {type: String}});

var Student = mongoose.model('MyStd', studentSchema);

var kas = new Student({name: "Manu KAshish"});

function SAVE(callback) {
    kas.save(function (err) {
        callback(err,"Successfully Save")
    });
}

function SHOW(arg1,callback) {
    console.log(arg1);
    Student.find({}).exec(function (err, result) {
        callback(err,result);
    });
}

async.waterfall([SAVE,SHOW], function (err, result) {
    if(err){
        console.log(err);
    }
    else
    {
        console.log(result);
    }
});


//console.log(kas);
