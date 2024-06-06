// Default welcome message at root/index page...

const welcomeMessage = (req, res) => {

    res.status(200).send(`
<html lang="en"> 
    <head>
        <title>Server On! ✅</title> 
        <link rel="icon" href="./public/fav.ico">

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
            
            body {
                text-align       : center;
                background-color : #eee;
            }

            h1{
                width         : max-content;
                margin        : 40px auto 10px; 
                padding       : 20px 30px 24px;
                font-family   : 'Nunito', sans-serif;
                font-size     : 42px;
                color         : #111;
                border        : 1px solid black;
                border-radius : 3px;
            }

            img{
                width  : 650px;
                height : 680px;
            }
        </style>
    </head>

    <body>
        <h1> AI Chat Server is running... ✅ </h1>
        <img src='./public/server.png' alt='server_logo' />
    </body>

</html> 
`);
}

export default welcomeMessage;