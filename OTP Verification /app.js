const express = require("express");
const app = express();
const port = 3000;
const optsnder = require("./opt-verifications-for-gmail");
// Very Important To Follow this Staps

// You can configure your Gmail account to allow less secure apps
// fom this link => https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4Mq3XehNdoe-JtJG1FmS1QgGA-30cpsL0TPZWGS_y7CfNgKpD2q6cEahO54pNSlTq_iCApl_rwAnpxMlkSJUPamTQVpfg
// When using this method make sure to also enable the required functionality by completing the

//to use this example you have to add .env file and
//set SENDER=YourEmail
// set PASSWORD=yourpassword
//then you good to go

optsnder("YOUR OPT CODE", "USER EMAIL");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
