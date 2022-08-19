const app=require('./src/app')

require('dotenv').config()
require('./src/db/mongodb')

const port = process.env.PORT

app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`)
})