require('dotenv').config();
require('./models/connection');
const Article = require('./models/articles');
const User = require('./models/users');
const Order = require('./models/orders');

const bullet = require('./node_modules/ervy/lib/bullet');
const { bg, fg } = require('./node_modules/ervy/lib/utils');

/*
** Articles
*/


function visualizeData(data) {
	let bulletData = [];
	let color = '';
	for (dataLine of data) {
		if (dataLine.stock < 5)
			color = 'red';
		else
			color = 'blue';
		bulletData.push({ key: dataLine.name, value: dataLine.stock, style: bg(color), barWidth: 1 });
	}

	//console.log(bulletData);

	console.log(bullet(bulletData, { style: '+', width: 30, barWidth: 2 }))
}


function displayAllArticles() {

	Article.find().then(data => visualizeData(data));
}

displayAllArticles();

function displayArticleByName(articleName) {
	Article.findOne({ name: articleName }).then(data => {
		console.log('ARTICLE =>', data);
	});
}

//displayArticleByName('Ducati E');

function displayArticleByID(articleId) {
	Article.findById(articleId).then(data => {
		console.log('ARTICLE =>', data);
	});
}

//displayArticleByID('625ea9ca38d6a3276994651c');

function updateArticlePrice(articleId, newPrice) {
	Article.updateOne({ _id: articleId }, { price: newPrice }).then(() => {
		console.log(`Price updated for ${articleId}`);
	});
}

//updateArticlePrice('625ea9ca38d6a3276994651c', 100);

function updateArticleStock(articleId, newStock) {
	Article.updateOne({ _id: articleId }, { stock: newStock }).then(() => {
		console.log(`Stock updated for ${articleId}`);
	});
}

//updateArticleStock('625ea9ca38d6a3276994651c', 16);

function resetStocks() {
	Article.updateMany({}, { stock: 0 }).then(() => {
		console.log(`Stocks successfully reset`);
	});
}


/*
** Users
*/

function displayAllUsers() {
	User.find().then(data => {
		console.log('USERS =>', data);
	});
}

function deleteUser(userId) {
	User.deleteOne({ _id: userId }).then(() => {
		console.log(`User ${userId} deleted`);
	});
}


/*
** Orders
*/

function displayAllOrders() {
	Order.find().then(data => {
		console.log('ORDERS =>', data);
	});
}

function updateOrderPaymentStatus(orderId, isPaid) {
	Order.updateOne({ _id: orderId }, { isPaid }).then(() => {
		console.log(`Order ${orderId} updated`);
	});
}

function deleteOrder(orderId) {
	Order.deleteOne({ _id: orderId }).then(() => {
		console.log(`Order ${orderId} deleted`);
	});
}


/*
** Query population
*/

function displayOrderArticles(orderId) {
	Order.findById(orderId)
		.populate('articles')
		.then((data) => console.log(data));
}
//displayOrderArticles('625ea9ca38d6a37769946511');

function displayUserOrders(userId) {
	Order.find({ user: userId })
		//.populate('user')
		//.populate('articles')
		.then((data) => console.log(data));
}

//displayUserOrders('625ea9ca38d6a3776994651b');


// Do not edit/remove code under this line
module.exports = {
	displayAllArticles,
	displayArticleByName,
	displayArticleByID,
	updateArticlePrice,
	updateArticleStock,
	resetStocks,
	displayAllUsers,
	deleteUser,
	displayAllOrders,
	updateOrderPaymentStatus,
	deleteOrder,
	displayOrderArticles,
	displayUserOrders,
};
