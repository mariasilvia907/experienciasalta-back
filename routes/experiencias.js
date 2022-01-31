/* /* Ruta
/experiencias */

/* var express = require('express');
var router = express.Router(); */
//const data = require('../utils/data')

/* GET experiencias page. */
/* router.get('/', function(req, res, next) {
  res.render('experiencias', {
    title: 'Experiencias'
});
}); */


/* router.get('/', function(req, res, next) {
  data.getAllExperiences((error, data) => {
    if(error){
      return res.send({
        error
      })
    }
    const JSONBody = JSON.parse(data);
    return res.render('experiencias', { 
      title: 'Experiencias',
      slogan: 'Viajá antes de viajar',
      frase: 'Viví experiencias en 360º',
      JSONBody  
    });
  })
})

module.exports = router; */