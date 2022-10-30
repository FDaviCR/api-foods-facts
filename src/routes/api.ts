import { Router } from 'express';

import * as ProductController from '../controllers/ProductController';

const router = Router();

// Endpoints de Produto
router.get('/products', ProductController.list);

//router.post('/championship/create', ProductController.create);
//router.put('/championship/update/:id', ProductController.update);
//router.delete('/championship/delete/:id', ProductController.destroy);


export default router;