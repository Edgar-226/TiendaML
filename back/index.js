import fetch from 'node-fetch';

const body = {a: 1};

const response = await fetch('https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=11', {
	method: 'post',
	body: JSON.stringify(body),
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();

console.log(data);