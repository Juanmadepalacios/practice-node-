const express = require('express');
const router = express.Router();


router.get('/notes/add', (req, res) =>{
    res.render('notes/new-note');
})

router.post('/notes/new-note', (req, res) => {
    //console.log(req.body);
   const { title, description } = req.body;
   const errors = [];
   if(!title) {
       errors.push({text: ' Please write a Title'});
   }
   if(!description) {
       errors.push({text: ' Please write a Description'});
   }
    res.send('ok');
})



router.get('/notes', (req, res) =>{
    res.send('Notas desde nuestra base de datos');
});

module.exports = router;