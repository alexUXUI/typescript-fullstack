'use strict';
const express = require('express');
const router = express.Router();
const homeTitle = 'Express, the Typescript edition';
router.get('/', (req, res, next) => {
    res.render('index', { title: homeTitle });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=index.js.map