'use strict';

import * as express from 'express';
const router = express.Router();

const homeTitle: string = 'Express, the Typescript edition';

/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: homeTitle});
});

export default router;
