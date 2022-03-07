onmessage = function() {
	let myDate;
	for(let i = 0; i < 10000000; i++) {
		let date = new Date();
		myDate = date
	}
	//将信息发送回生成它的线程,可以暂时理解为此作用域方法
	postMessage(myDate);
}