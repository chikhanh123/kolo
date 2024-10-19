const url1 = 'https://kolo-web.cndcorp.net/api/game-batch-claim';
const token1 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8va29sby13ZWIuY25kY29ycC5uZXQvYXBpL2F1dGgiLCJpYXQiOjE3MjkzMzg0NjUsImV4cCI6MTcyOTQyNDg2NSwibmJmIjoxNzI5MzM4NDY1LCJqdGkiOiJVdVJubXc0U2w1SzJzQ2N2Iiwic3ViIjoiOTY0NDI1OCIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJsYW5nIjoiZW4ifQ.J8ZK05IOkYSvgnHXn_05bVXiYkcif-RVx03r3yaznE8';

const url2 = 'https://kolo-web.cndcorp.net/api/game-batch-claim';
const token2 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8va29sby13ZWIuY25kY29ycC5uZXQvYXBpL2F1dGgiLCJpYXQiOjE3MjkzMzg4OTMsImV4cCI6MTcyOTQyNTI5MywibmJmIjoxNzI5MzM4ODkzLCJqdGkiOiJ4ZGFPaTQ2ZzF6c1hwbGNLIiwic3ViIjoiOTY0NTI0NyIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJsYW5nIjoiZW4ifQ.lqu2W2mXicOcr5Lw68QCJtOBCHsKC3rtDDZ9VclJabU';

const headers1 = {
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
  'authorization': `Bearer ${token1}`,
  'content-type': 'application/json',
  'origin': 'https://kolo-web.cndcorp.net',
  'priority': 'u=1, i',
  'referer': 'https://kolo-web.cndcorp.net/main/?farm=true&lang=en/',
  'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
};

const headers2 = {
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en-US,en;q=0.9',
  'authorization': `Bearer ${token2}`,
  'content-type': 'application/json',
  'origin': 'https://kolo-web.cndcorp.net',
  'priority': 'u=1, i',
  'referer': 'https://kolo-web.cndcorp.net/main/?farm=true&lang=en/',
  'sec-ch-ua': '"Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36'
};

const body1 = {
  "task_id": 68,
  "score": 10
};

const body2 = {
  "task_id": 68,
  "score": 10
};

function callApi1() {
  fetch(url1, {
    method: 'POST',
    headers: headers1,
    body: JSON.stringify(body1)
  })
  .then(response => response.json())
  .then(data => console.log('Response from API 1:', data))
  .catch(error => console.error('Error from API 1:', error));
}

function callApi2() {
  fetch(url2, {
    method: 'POST',
    headers: headers2,
    body: JSON.stringify(body2)
  })
  .then(response => response.json())
  .then(data => console.log('Response from API 2:', data))
  .catch(error => console.error('Error from API 2:', error));
}

// Gọi API 1 mỗi 1 giây
setInterval(callApi1, 100);

// Gọi API 2 mỗi 1 giây
setInterval(callApi2, 100);
