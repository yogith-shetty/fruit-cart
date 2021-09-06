const table = document.querySelector("table");
const totalDisplay = document.querySelector("h3 span");
// console.log(JSON.parse(localStorage.getItem("final_items")));
const itemList = JSON.parse(localStorage.getItem("final_items"));
const confirmBtn = document.querySelector("#confirm");

console.log(itemList);

itemList.forEach((element) => {
  // console.log(element.item);
  table.innerHTML += ` <tr>
		<h1><td>${element.item}</td></h1>
		<h1><td>${element.quantity}</td></h1>
		<h1><td>${element.unit}</td></h1>
		<h1><td>${element.net}</td></h1>
	</tr>`;
});

let totalPrice = 0;
itemList.forEach((item) => {
  totalPrice += item.net;
});
totalDisplay.innerText += totalPrice;
// console.log(totalPrice);

confirmBtn.addEventListener("click", () => {
  alert("Orders placed!");
  localStorage.clear();
  window.history.back();
});
