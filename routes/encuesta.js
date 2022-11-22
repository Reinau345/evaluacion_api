const { Router } = require('express')
const router = Router() //Para obtener la función del router 
const {getEncuesta, postEncuesta, putEncuesta, patchEncuesta, deleteEncuesta} = require('../controllers/encuesta')

router.get('/', getEncuesta)
router.post('/', postEncuesta)
router.put('/', putEncuesta)
router.patch('/', patchEncuesta)
router.delete('/', deleteEncuesta)

module.exports = router