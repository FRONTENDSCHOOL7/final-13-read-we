const compression = require('compression');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const app = express();
const port = 8080;
require('dotenv').config();
app.use(compression());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const aladinApiKey = process.env.REACT_APP_ALADIN_API_KEY;

const aladinApiBaseUrl = 'https://www.aladin.co.kr/ttb/api/ItemList.aspx';
const aladinApiSearchUrl = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx';
const aladinApiLookUpUrl = 'http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx';

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('에러 발생');
  }
};
app.get('/bestseller', async (req, res) => {
  const { count, start } = req.query;
  const queryType = 'Bestseller';
  const aladinApiUrl = `${aladinApiBaseUrl}?ttbkey=${aladinApiKey}&QueryType=${queryType}&MaxResults=${count}&start=${start}&SearchTarget=Book&output=js&Cover=Big&CategoryId&Version=20131101`;

  try {
    const data = await fetchData(aladinApiUrl);
    res.json(data);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

app.get('/search', async (req, res) => {
  const { bookName, count, start } = req.query;
  const aladinApiUrl = `${aladinApiSearchUrl}?ttbkey=${aladinApiKey}&Query=${encodeURIComponent(
    bookName,
  )}&QueryType=Title&MaxResults=${count}&start=${start}&SearchTarget=Book&output=js&Cover=Big&Version=20131101`;

  try {
    const data = await fetchData(aladinApiUrl);
    res.json(data);
  } catch (error) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).json({ error: error.message });
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
