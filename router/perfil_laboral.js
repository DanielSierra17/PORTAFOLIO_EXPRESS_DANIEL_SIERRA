const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('perfil_laboral', {
        nombre: 'Daniel Fernando Sierra Betancourt',
        titulo: 'Tecnólogo en Desarrollo de Software',
        contacto: 'Información de Contacto',
        skills: 'Habilidades',
        lenguaje: 'Javascript'
    })
})

module.exports = router;