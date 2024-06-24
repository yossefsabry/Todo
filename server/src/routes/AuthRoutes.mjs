import Router from 'express';

const AuthRouter = Router();

AuthRouter.get('/', (req, res) => {
  res.send('auth get requests');
});

export default AuthRouter;



