// Table:
let personData = [
    {name: 'Dylan', age: 34},
    {name: 'Christopher', age: 30},
    {name: 'Linus', age: 28},
    {name: 'Isabella', age: 18},
    {name: 'Sebastian', age: 26}
];
window.onload = () => {
    loadTableData(personData);
}
function loadTableData(personData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    for (let person of personData) {
        dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`
    }
    tableBody.innerHTML = dataHtml;
}