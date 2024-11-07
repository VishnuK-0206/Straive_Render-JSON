export default function json2html(data) {
  let html='<table data-user="vishnu.kams@gmail.com">';
  html+='<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  html+='<tbody>';
  for (let person of data) {
    html+=`<tr><td>${person.Name}</td><td>${person.Age}</td><td>${person.Gender}</td></tr>`;
  }
  html+='</tbody></table>';
  return html;
}
