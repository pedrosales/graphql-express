import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.json({ msg: 'Another router without graphql - School of net' });
}


);

export default router;