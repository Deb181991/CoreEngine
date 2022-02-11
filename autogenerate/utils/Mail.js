Sendmail();
function Sendmail() {
    var nodemailer = require("nodemailer");
    //Step1
    var transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "debadatta@esspl.com",
            pass: "Deba@2022",
        }
    });
    //Step2
    var mailOptions = {
        from: 'debadatta@esspl.com',
        to: 'debadatta@esspl.com',
        subject: 'Error screenshot',
        text: 'Error Screenshot',
        attachments: [{ filename: 'CucumberReport.html', path: "../reports/html/CucumberReport.html" }]
    };
    //Step3
    transport.sendMail(mailOptions, function (error, info) {
        const world = this;
        if (error) {
            console.log(error);
            //response.send(err);
        }
        else {
            console.log("Message sent: Successfull");
            //response.send(info);
        }
    });
}
