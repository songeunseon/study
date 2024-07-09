let multiplicationData = [];

function generateMultiplicationTable() {
    let selectedDan = document.getElementById('dan').value;
    if (!selectedDan) return;

    selectedDan = parseInt(selectedDan);
    multiplicationData = [];
    for (let i = 1; i <= 9; i++) {
        multiplicationData.push({ dan: selectedDan, multiplier: i, result: selectedDan * i });
    }
    renderTable();
}

function renderTable() {
    let table = '<table>';
    table += '<tr><th>' + multiplicationData[0].dan + '단</th></tr>';
    for (let i = 0; i < multiplicationData.length; i++) {
        table += '<tr>';
        table += '<td id="cell-' + multiplicationData[i].dan + '-' + multiplicationData[i].multiplier + '">' + 
                 multiplicationData[i].dan + ' x ' + multiplicationData[i].multiplier + ' = ' + multiplicationData[i].result + 
                 '<div class="crud-buttons">' +
                 '</div>' + 
                 '</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('multiplicationTable').innerHTML = table;
}