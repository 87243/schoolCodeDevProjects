// Table:
let sortDirection = false;
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
function loadTableData(personData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';
    for (let person of personData) {
        dataHtml += `<tr><td>${person.name}</td><td>${person.age}</td></tr>`
    }
    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName){
    const dataType = typeof personData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType){
        case 'number':
        sortNumberColumn(sortDirection, columnName);
        break;
    }
    loadTableData(personData);
}

function sortNumberColumn(sort, columnName){
    personData = personData.sort((p1,p2) =>{
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}