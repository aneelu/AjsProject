app.service("my_service", my_service);
function my_service() {
    this.calcData = function () {
        return "Data from OracleDB Soon...";
    }

    this.graphData = function () {
        return "Data from MySQL Soon...";
    }

    this.chartData = function () {
        return "Data from MongoDB Soon...";
    }

    this.summaryData = function () {
        return "Data from Hadoop Soon...";
    }

    this.pageOneData = function () {
        return "Data from MemSQL Soon...";
    }

    this.pageTwoData = function () {
        return "Data from CassandraDB Soon...";
    }
}