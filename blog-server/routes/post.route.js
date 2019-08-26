const postRoutes = express.Router();
const post_controller = require('../controllers/post.controller');
// Defined store route

// Defined get data(index or listing) route
postRoutes.get('/all', post_controller.list);
postRoutes.post('/getById', post_controller.getById);
postRoutes.post('/save', post_controller.save);
postRoutes.post('/delete', post_controller.delete);
module.exports = postRoutes;