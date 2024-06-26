const express = require("express");
const cors = require('cors');
const nodemailer =require("nodemailer");
const port= process.env.PORT || 5000
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app=express();
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mpylzkg.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run(){
  try{
        const data=client.db('Vendor').collection('vd');
        app.post('/contactus', async(req,res)=>{
          const message=req.body;
          console.log(message);
          const result= await data.insertOne(message);
          console.log(result);
          try{
            const transporter = nodemailer.createTransport({
              service:'gmail',
              auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PASS, // generated ethereal password
              },
            });
            const mailOption={
              from: process.env.EMAIL,
              to: 'tonmoydebnath192@gmail.com',
              subject: `${message.subject}`,
              html:`
              <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
    
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <title></title>
                  
                    <style type="text/css">
                      @media only screen and (min-width: 520px) {
                  .u-row {
                    width: 500px !important;
                  }
                  .u-row .u-col {
                    vertical-align: top;
                  }
    
                  .u-row .u-col-100 {
                    width: 500px !important;
                  }
    
                }
    
                @media (max-width: 520px) {
                  .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                  }
                  .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                  }
                  .u-row {
                    width: 100% !important;
                  }
                  .u-col {
                    width: 100% !important;
                  }
                  .u-col > div {
                    margin: 0 auto;
                  }
                }
                body {
                  margin: 0;
                  padding: 0;
                }
    
                table,
                tr,
                td {
                  vertical-align: top;
                  border-collapse: collapse;
                }
    
                .ie-container table,
                .mso-container table {
                  table-layout: fixed;
                }
    
                * {
                  line-height: inherit;
                }
    
                a[x-apple-data-detectors='true'] {
                  color: inherit !important;
                  text-decoration: none !important;
                }
    
                table, td { color: #000000; } </style>
                  
                  
    
                </head>
    
                <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ced4d9;color: #000000">
                  
                  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ced4d9;width:100%" cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    
                  
                  
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                      
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="height: 100%;width: 100% !important;">
                  <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                  
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        <img style="display: block;
                        margin-left: auto;
                        margin-right: auto;" width="50px" src="https://i.ibb.co/NKBP5RK/logo.jpg" alt="">
                  <h1 style="margin: 2px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><strong>SummerLand Restaurant</strong></h1>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        
                  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                    <tbody>
                      <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                          <span>&#160;</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        
                  <h4 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 16px; font-weight: 400;"><strong>Name:</strong> ${message.name}<br /><strong>Email:</strong> ${message.email}</h4>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                
    
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        
                  <h4 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 16px; font-weight: 400;"><strong>Message   :</strong> ${message.message}</h4>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                  </div>
                  </div>
                </div>
    
                    </div>
                  </div>
                  </div>
                  
    
    
                    </td>
                  </tr>
                  </tbody>
                  </table>
    
                </body>
    
                </html>
              
              `
    
            }
            transporter.sendMail(mailOption,(error,info)=>{
              if(error){
                console.log("Error: ",error);
              }
              else{
                console.log("email sent" + info.response);
                res.status(201).json({status:201,info});
              }
            })
            
          }
          catch{
            res.status(401).json({status:401,info});
          }
          
        });
        app.post('/makereservation', async(req,res)=>{
          const message=req.body;
          console.log(message);
          const result= await data.insertOne(message);
          console.log(result);
          try{
            const transporter = nodemailer.createTransport({
              service:'gmail',
              auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PASS, // generated ethereal password
              },
            });
            const mailOption={
              from: process.env.EMAIL,
              to: 'tonmoydebnath192@gmail.com',
              subject: `For Reservation`,
              html:`
              <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                <head>
    
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <meta name="x-apple-disable-message-reformatting">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <title></title>
                  
                    <style type="text/css">
                      @media only screen and (min-width: 520px) {
                  .u-row {
                    width: 500px !important;
                  }
                  .u-row .u-col {
                    vertical-align: top;
                  }
    
                  .u-row .u-col-100 {
                    width: 500px !important;
                  }
    
                }
    
                @media (max-width: 520px) {
                  .u-row-container {
                    max-width: 100% !important;
                    padding-left: 0px !important;
                    padding-right: 0px !important;
                  }
                  .u-row .u-col {
                    min-width: 320px !important;
                    max-width: 100% !important;
                    display: block !important;
                  }
                  .u-row {
                    width: 100% !important;
                  }
                  .u-col {
                    width: 100% !important;
                  }
                  .u-col > div {
                    margin: 0 auto;
                  }
                }
                body {
                  margin: 0;
                  padding: 0;
                }
    
                table,
                tr,
                td {
                  vertical-align: top;
                  border-collapse: collapse;
                }
    
                .ie-container table,
                .mso-container table {
                  table-layout: fixed;
                }
    
                * {
                  line-height: inherit;
                }
    
                a[x-apple-data-detectors='true'] {
                  color: inherit !important;
                  text-decoration: none !important;
                }
    
                table, td { color: #000000; } </style>
                  
                  
    
                </head>
    
                <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ced4d9;color: #000000">
                  
                  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ced4d9;width:100%" cellpadding="0" cellspacing="0">
                  <tbody>
                  <tr style="vertical-align: top">
                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                    
                  
                  
                <div class="u-row-container" style="padding: 0px;background-color: transparent">
                  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                      
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="height: 100%;width: 100% !important;">
                  <div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
                  
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        <img style="display: block;
                        margin-left: auto;
                        margin-right: auto;" width="50px" src="https://i.ibb.co/NKBP5RK/logo.jpg" alt="">
                  <h1 style="margin: 2px; line-height: 140%; text-align: center; word-wrap: break-word; font-size: 22px; font-weight: 400;"><strong>SummerLand Restaurant</strong></h1>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        
                  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                    <tbody>
                      <tr style="vertical-align: top">
                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                          <span>&#160;</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                  <tbody>
                    <tr>
                      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">
                        
                  <h4 style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 16px; font-weight: 400;"><strong>Name:</strong> ${message.name}<br /><strong>Email:</strong> ${message.email}
                  <br /><strong>Contact Number:</strong> ${message.number}
                  <br /><strong>Number of People:</strong> ${message.people}
                  <br /><strong>Date and Time:</strong> ${message.date}
                  <br /><strong>Special Request:</strong> ${message.request}
                  </h4>
    
                      </td>
                    </tr>
                  </tbody>
                </table>
    
    
                  </div>
                  </div>
                </div>
    
                    </div>
                  </div>
                  </div>
                  
    
    
                    </td>
                  </tr>
                  </tbody>
                  </table>
    
                </body>
    
                </html>
              
              `
    
            }
            transporter.sendMail(mailOption,(error,info)=>{
              if(error){
                console.log("Error: ",error);
              }
              else{
                console.log("email sent" + info.response);
                res.status(201).json({status:201,info});
              }
            })
            
          }
          catch{
            res.status(401).json({status:401,info});
          }
          
        });
    
    
    
  }
  finally{

  }
}
run().catch(console.log);

app.get('/',async(req,res)=>{
  res.send('summerland server is running');
})

app.listen(port,()=> console.log('portal running'));