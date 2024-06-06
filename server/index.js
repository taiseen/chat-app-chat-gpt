import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import welcomeMessage from './wcSms.js';
import dummyData from './dummyRes.js';
import chatGpt from './chatGpt.js';

dotenv.config();

const app = express();

app.use(express.static('./public'));
app.use(express.json());
app.use(cors());


app.get('/', welcomeMessage)

app.post('/dummyData', dummyData);

app.post('/api', chatGpt);


const portNumber = 8000
app.listen(portNumber, () => console.log('✅ Server is running port:- ' + portNumber));