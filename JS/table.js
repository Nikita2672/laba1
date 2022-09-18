var table;
$(document).ready(function () {
    table = TABLE.DataTable({
        data: dataset,
        columns: [
            {title: 'X'},
            {title: 'Y'},
            {title: 'R'},
            {title: 'Time'},
            {title: 'Time completed'},
            {title: 'Result'},
        ]
    });
});


