var bodyParser = require('body-parser');
var roomController = require('./roomController.js');

module.exports = function(app, express) {
  var roomRouter = express.Router();

  app.use(bodyParser.json());

  app.get('/api/room/room', roomController.getRoom);
  app.post('/api/object', roomController.addObject);
  app.delete('/api/object', roomController.deleteObject);
  app.put('/api/object', roomController.updateObject);