//very interesting express it works inside typescript!!
import Express from 'express'

const app: Express.Application = Express()

//always request first later response
app.get('/', (req:Express.Request , res: Express.Response) =>{
   res.send('hi there i am Felipe programmer18')
})


app.listen(8080, () => {
    console.log('running new versions')
})