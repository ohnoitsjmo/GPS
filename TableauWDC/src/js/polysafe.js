(function() {
    // Create the connector object
    var myConnector = tableau.makeConnector();

    // Define the schema
    myConnector.getSchema = function(schemaCallback) {
        var cols = [{
            id: "type",
            dataType: tableau.dataTypeEnum.string
        }, 
        {
            id: "time",
            dataType: tableau.dataTypeEnum.string
        },
        {
            id: "latitude",
            dataType: tableau.dataTypeEnum.float
        },
        {
            id: "longitude",
            dataType: tableau.dataTypeEnum.float
        }];

        var tableSchema = {
            id: "polySafeFeed",
            alias: "Poly Safe Data",
            columns: cols
        };

        schemaCallback([tableSchema]);
    };

    // Download the data
    myConnector.getData = function(table, doneCallback) {
        $.getJSON("http://localhost:4200/api/queryAllIncidents.json", function(resp) {
            var feat = resp.data,
                tableData = [];

            // Iterate over the JSON object
            for (var i = 0, len = feat.length; i < len; i++) {
                tableData.push({
                    "type": feat[i].type,
                    "time": feat[i].time,
                    "latitude": feat[i].location[0],
                    "longitude": feat[i].location[1],
                });
            }

            table.appendRows(tableData);
            doneCallback();
        });
    };

    tableau.registerConnector(myConnector);

    // Create event listeners for when the user submits the form
    $(document).ready(function() {
        $("#submitButton").click(function() {
            tableau.connectionName = "Poly Safe Incident Data"; // This will be the data source name in Tableau
            tableau.submit(); // This sends the connector object to Tableau
        });
    });
})();
