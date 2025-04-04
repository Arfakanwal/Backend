//console.log('hello world');


import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const port =process.env.PORT || 3000
// 192.168.100.151:3000
app.get('/', (req, res) => {
    console.log("Requesting IP:",req.ip);
    
  res.send('Hello World!'+ new Date().toLocaleString())
})
app.get('/weather/:cityName',(req,res)=>{
    console.log("Weather App");
    let weatherData ={
        karachi:{
            city :"karachi",
            tempInC: 26,
            humidity: 56,
            high: 32,
            low: 23
          },
       lahore:{
        city :"lahore",
        tempInC: 28,
        humidity: 56,
        high: 32,
        low: 23
      }
      
     
    }
    let userInputCity = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherData[userInputCity];
    if(weatherDataToSend){
        res.send(weatherDataToSend);

    }else{
        res.send(404).send('Data for ${req.params.cityName} not found');
    }
    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})