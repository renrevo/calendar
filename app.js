let month = document.querySelector('#month');
let year = document.querySelector('#year');

const month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var date = new Date();

month.innerHTML = month_names[date.getMonth()];
year.innerHTML = date.getFullYear();