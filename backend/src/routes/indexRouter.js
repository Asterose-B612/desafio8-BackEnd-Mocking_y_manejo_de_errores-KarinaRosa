import productsRouter from './productsRouter.js'
import chatRouter from './chatRouter.js'
import cartRouter from './cartRouter.js'
import userRouter from './userRoutes.js'
import multerRouter from './multerRouter.js'
import express from 'express'
import { __dirname } from '../path.js'
import sessionRouter from './sessionRouter.js'
import mockRouter from './mockRouter.js'


const indexRouter = express.Router()
//ruta de inicio. clase 19. Dar la bienvenida al usuario.
indexRouter.get('/', (req, res) => {
  res.status(200).send("Bienvenido/a!")
})




indexRouter.use('/public', express.static(__dirname + '/public'))
indexRouter.use('/api/products', productsRouter, express.static(__dirname + '/public'))
//productsRouter va a importar las rutas de todos esos elementos. 
//Genero ruta donde subo las imagenes.
// Luego, configura Express para servir archivos estáticos desde la carpeta '/public'
indexRouter.use(express.static(__dirname + '/public'));
//PARA LA CARGA DE IMAGENES
indexRouter.use('/upload', multerRouter)
indexRouter.use('/api/cart', cartRouter)
indexRouter.use('/api/chat', chatRouter, express.static(__dirname + '/public'))
indexRouter.use('/api/users', userRouter)
indexRouter.use('/api/session', sessionRouter)
indexRouter.use('/mockingproducts', mockRouter)
indexRouter.use('/mockingusers', mockRouter)




export default indexRouter