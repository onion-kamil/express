const express = require('express');
const News = require('../models/news');
const router = express.Router();

router.all('*', (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('login');
        return;
    }

    next()
})


/* GET home page. */
router.get('/', (req, res) => {

    News.find({}, (err, data) => {

        res.render('admin/index', {
            title: 'Admin',
            data
        })
    })

});


router.get('/news/add', (req, res) => {
    res.render('admin/news-form', {
        title: 'Add news'
    });
});

router.post('/news/add', (req, res) => {

    const body = req.body;
    console.log(body)

    const newsData = new News(body);

    newsData.save()

    res.render('admin/news-form', {
        title: 'Add news',
        body: {}
    });
});


router.get('/news/delete/:id', (req, res) => {
    News.findByIdAndDelete(req.params.id, (err) => {
        res.redirect('/admin')
    })
});


module.exports = router;