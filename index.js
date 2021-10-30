import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import fileUpload from 'express-fileupload'
import dotenv from 'dotenv'

dotenv.config()

// инициализация приложения...
const app = express()

// мидлвары - дополнительныя функциональность в основном потоке программы
app.use(express.json())
app.use(express.static('static')) // делаем папку static общедоступной
app.use(fileUpload({}))
app.use('/api', router)
// app.use('/users', userRouter) - для каждой сущности регистрируем свой роутер

async function startApp () {
  try {
    await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(process.env.PORT, () => console.log('SERVER STARTED ON PORT ' + process.env.PORT))
  } catch (e) {
    console.log(e)
  }
}

// запуск приложения
startApp()
