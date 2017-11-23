import express from 'express';
import path from 'path';

import webpack from 'webpack';
// Right now ES6 doesn't support conditional imports so webpack-dev-server
// has to be under dependencies instead of devDependencies.
import WebpackDevServer from 'webpack-dev-server';

import bodyParser from 'body-parser'; //  PARSE HTML BODY

import nodemailer from 'nodemailer';



const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './../public')));


/* support client-side routing */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});


app.listen(port, () => {
    console.log('Express is listening on port', port);
});

app.post('/contactus', (req,res)=>{
  var emailAddress = req.body.emailAddress;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var note = req.body.note;

  var emailString = 'Email: '+ emailAddress;

  if (firstName !='' || lastName !='' ) {
    emailString += '<br>'+ 'Name: '+ firstName + ' ' + lastName;
  }

  if (note !='') {
   emailString += '<br>'+ note; 
  }

  
  
  var transporter = nodemailer.createTransport({
    host: 'smtp.mail.com',
    port: 587,
    auth: {
      user: 'liftlytics@mail.com',
      pass: 'liftlytics'
    }
  });

  var mailOptions = {
    from: 'liftlytics@mail.com',
    to: 'hello@liftlytics.com',
    subject: 'From LiftLytics Contact',
    html: emailString
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send(333, 'Can not send');
    } else {
      res.send(200, 'Success');
    }
  });
  
});

// if development environment, turn on Dev Server
if (process.env.NODE_ENV == 'development') {
  const devPort = 4000;
  console.log('Server is running in development mode');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    }
  );
}
