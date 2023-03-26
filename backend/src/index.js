import server from './server';

(async () => {
  const instance = server();
  await instance.start();
})();
