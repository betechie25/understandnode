const express = require('express');
const router = express.Router();

const {getPeople,
    createPerson,
    createPostmanPerson,
    updatePeron,
    deletePerson} = require('../controllers/people')

// router.get('/',getPeople)
// router.post('/',createPerson)
// router.post('/postman',createPostmanPerson)
// router.put('/:id',updatePeron)
// router.delete('/:id',deletePerson)

//or we can write above commented coe like this

router.route('/').get(getPeople).post(createPerson);
router.route('/potman').post(createPostmanPerson);
router.route('/:id').put(updatePeron).delete(deletePerson);

module.exports = router;