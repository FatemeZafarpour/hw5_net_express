const express = require('express');
const router = express.Router();
let variable = require('./../app');

router.get('/', function(req, res) {
    if(!req.body){
        res.status(400).json({message:"bad request"});
    }else{
        variable.formList.items.push(req.body); 
        res.status(200).json(variable.formList);

        fs.writeFileSync(path.resolve(__dirname, "/../forms.json"), JSON.stringify(variable.formList), 'utf8', function (err) {
        if (err) {
            console.log(err);
        }else{
            console.log('new form added!')
        }     
    });
    }
    
});

module.exports = router;