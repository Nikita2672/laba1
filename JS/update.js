function receiveSubmit() {

    const x = $(FIELD_X).val();
    const y = $(FIELD_Y).val();
    const r = $(FIELD_R).val();

    if (validateInputedValues(x, y, r)) {
        sendRequest(x, y, r);
    }
}

function sendRequest(x, y, r) {
    $.ajax({
        type: "GET",
        url: "index.php",
        async: false,
        data: {"x": x, "y": y, "r": r},
        success: function (data) {
            success(data);
        },
        error: function (data) {
            alert(data);
        },
    });
}

function success(data) {
    table.destroy();
    initTable(data);
}

function initTable(data) {
    var mass = data.split("*");
    dataset.push(mass);
    table = TABLE.DataTable({
        data: dataset,
        columns: [
            {title: 'X',},
            {title: 'Y',},
            {title: 'R',},
            {title: 'Time',},
            {title: 'Process Time',},
            {title: 'Result',},
        ],
    })
}
