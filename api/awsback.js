const express = require('express');
const router = express.Router();
const queries = require('../db/queries')

function isValidId(req, res, next) {
  if (isNaN(req.params.id))next() 
  next(new Error('Invalid Id'))
}

function validAWS (items){
  console.log(items)
  const hasTitle = typeof items.title == 'string' && items.title.trim() != '';
  const hasDescription = typeof items.description == 'string' && items.description.trim() != '';
  const hasUrl = typeof items.url == 'string' && items.url.trim() != '';
  return hasTitle && hasDescription && hasUrl

}

router.get('/',(req, res)=> {
  queries.getAll().then(items => {
    res.json(items)
  })
})

router.get('/:id',isValidId, (req, res)=>{
  queries.getOne(req.params.id).then(items => {
    if(items){
      res.json(items)
    } else {
      res.status(404)
      next(new Error('Not Found'))
    }
  })
})

router.post('/',(req, res,next)=>{
  console.log(req.body)
  if(validAWS(req.body)){
    queries.create(req.body).then(item => {
      res.json(item[0])
    })
  }else{
    next(new Error('Invalid Item'))
  }
})
module.exports = router