import express from 'express';

import { getContactUs, createContactUs, updateContactUs, deleteContactUs} from '../controllers/contactUs.js';

const router = express.Router();

router.get('/', getContactUs);

router.post('/', createContactUs);
router.patch('/:id', updateContactUs);
router.delete('/:id', deleteContactUs);
export default router;