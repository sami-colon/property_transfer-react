import web3 from "./web3";

const address = "0xdA1B6d42663782Cc3966082227666330F1C9Da80";
const abi = [{"constant":false,"inputs":[{"name":"_verifiedOwner","type":"address"},{"name":"_propertyName","type":"string"}],"name":"allotProperty","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DA","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a1","type":"string"},{"name":"a2","type":"string"}],"name":"stringsEqual","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_propertyName","type":"string"}],"name":"transferProperty","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalNoOfProperty","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"propertiesOwner","outputs":[{"name":"name","type":"string"},{"name":"isSold","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ownerAddress","type":"address"}],"name":"getPropertyCountOfAnyAddress","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_checkOwnerAddress","type":"address"},{"name":"_propertyName","type":"string"}],"name":"isOwner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_verifiedOwner","type":"address"},{"indexed":true,"name":"_totalNoOfPropertyCurrently","type":"uint256"},{"indexed":false,"name":"_nameOfProperty","type":"string"},{"indexed":false,"name":"_msg","type":"string"}],"name":"PropertyAlloted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_propertyName","type":"string"},{"indexed":false,"name":"_msg","type":"string"}],"name":"PropertyTransferred","type":"event"}]

export default new web3.eth.Contract(abi,address);

//export default new web3.eth.Contract(abi,address);
