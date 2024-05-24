import usersRouter from './user.router.js'


// Está función recibe la apliacación como parámetro de entrada
export function routerAPI(app){
    app.use('/users', usersRouter);
}