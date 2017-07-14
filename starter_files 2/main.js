var template = `
<h2> INTERNAL COMPANY DIRECTORY </h2>
  <div class = "container" >

`
// customers.results.forEach(function(element){
for (var i = 0; i < customers.results.length; i++) {
    template += `
<div class = "customerInfo">
<img src="${customers.results[i].picture.large}">

  <div class = "name">
      ${customers.results[i].name.first}
      ${customers.results[i].name.last}
  </div>
      <div class = "email">
    <a href="">${customers.results[i].email}</a>
      </div>
      <div class = "street">
      ${customers.results[i].location.street}
      </div>
      <div class = "city">
      ${customers.results[i].location.city}
      ${customers.results[i].location.state}
      ${customers.results[i].location.postcode}
      </div>
      <div class = "phone">
      ${customers.results[i].phone}
      </div>
      <div class = "socialNum">
      ${customers.results[i].id.value}
      </div>
    </div> `

}
template += `</div>`;


document.querySelector('body').innerHTML = template


console.log(customers);


// for (var i = 0; i < customers.results.length; i++) {
//   // for (var r = 0; r < 4; r++ ){
//
// const template =  `
// <div class = "container" >
// <h2> INTERNAL COMPANY DIRECTORY </h2>
// <div class = "row[i]" >
// <img src="${customers.results[i].picture.thumbnail}">
// </div>
// </div>
// `;
// }
//
//
//
//
//
// console.log(template)
// document.querySelector('.container').innerHTML = template
