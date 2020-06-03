const express = require('express');
const router = express.Router();
let variable = require('./../app');

/* GET home page. */
router.get('/forms', function(req, res) {
  let result = variable.formList;
  res.status(200).json(result);
})

/* GET form page. */
router.get('/forms/:formId', function(req, res) {
  const id =  req.params.formId
  const myForms = variable.formList.items;
  let result;

  (myForms).forEach(element => {
    if(element.id === id){
          result = element;
    }
  });

  res.status(200).json(result);
})

router.post('/submit',function(req, res)
{
  console.log('successfull submission')
  console.log('recieved data ',req.body)
  res.status(200).send('submition was successful')
})
  

module.exports = router;
