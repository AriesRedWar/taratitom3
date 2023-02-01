const express = require('express')
const router = express.Router()
const Article = require('../models/article.js')


//GET ALL ARTICLES
router.get('/', (req, res) => {
  Article.find()
    .then(foundArticle => {
      res.send(foundArticle)
    })
    .catch(err => {
      console.log(err);
      res.render('error404')
    })
})

router.get('/:id', (req, res) => {
  Article.findById(req.params.id)
    .then(foundArticle => {
      res.send(foundArticle)

    })
    .catch(err => {
      console.log(err);
      res.render('error404')
    })
})

//CREATE NEW ARTICLE
router.post('/', (req, res) => {
  Article.create(req.body)
    .then(foundArticle => {
      res.send(foundArticle)
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//DELETE ARTICLE
router.delete('/:id', (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(foundArticle => {
      res.send(foundArticle)
      res.status(303).redirect('/')
    })
    .catch(err => {
      console.log(err);
      res.render('Delete unsuccessful')
    })
})


//EDIT/UPDATE ARTICLE
router.put('/:id', (req, res) => {
  Article.findByIdAndUpdate(req.params.id, req.body)
    .then(foundArticle => {
      foundArticle.save()
    })
    .catch(err => {
      console.log(err);
      res.render('error404')
    })
})

// export
module.exports = router