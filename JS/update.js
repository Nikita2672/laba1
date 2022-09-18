function receiveSubmit() {

    let x = FIELD_X.val();
    let y = FIELD_Y.val();
    let r = FIELD_R.val();

    if (validateInputedValues(y, r)) {
        sendRequest(x, y, r);
    }
}

function sendRequest(x, y, r) {
    $.ajax({
        type: "GET",
        url: "index.php",
        async: false,
        data: {"x": x.trim(), "y": y.trim(), "r": r.trim()},
        success: function (data) {
            success(data);
        },
        error: function (data) {
            alert(data);
        }
    });
}

function success(data) {
    table.destroy();
    initTable(data);
}

function initTable(data) {
    mass = data.split("*");
    dataset.push(mass);
    console.log(dataset)
    table = TABLE.DataTable({
        data: dataset,
        columns: [
            {title: 'X'},
            {title: 'Y'},
            {title: 'R'},
            {title: 'Time'},
            {title: 'Process Time'},
            {title: 'Result'}
        ]
    })
}
