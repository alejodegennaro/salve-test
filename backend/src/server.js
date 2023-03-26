import Hapi from '@hapi/hapi';
import Joi from '@hapi/joi';
import config from 'config';
import routes from './routes';

const initServer = (server) => {
  process.on('unhandledRejection', (err) => {
    console.log(`unhandledRejection ${err}`);
    throw err;
  });

  //log all requests
  server.events.on('response', function (request) {
    console.log(
      request.info.remoteAddress +
        ': ' +
        request.method.toUpperCase() +
        ' ' +
        request.path +
        ' --> ' +
        request.response.statusCode
    );
  });

  // add validation for requests
  server.validator(Joi);
  // add all routes
  server.route(routes);

  return server;
};

export default () => {
  const {host, port, timeout} = config.server;

  const server = new Hapi.Server({
    host,
    port,
    routes: {
      cors: true,
      timeout: {server: timeout},
    },
  });

  initServer(server);
  console.log('Server - Up and running at: ' + server.info.uri);

  return server;
};
