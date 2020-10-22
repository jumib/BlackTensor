<template>
  <div id="chartdiv"/>
</template>

<script>
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_frozen from '@amcharts/amcharts4/themes/frozen'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
am4core.useTheme(am4themes_frozen)
am4core.useTheme(am4themes_animated)
export default {
  name: 'App',
  mounted() {
    let chart = am4core.create('chartdiv', am4charts.XYChart)
    chart.padding(0, 15, 0, 15)
    chart.dataSource.url = 'https://www.amcharts.com/wp-content/uploads/assets/stock/MSFT.csv'
    chart.dataSource.parser = new am4core.CSVParser()
    chart.dataSource.parser.options.useColumnNames = true
    chart.dataSource.parser.options.reverse = true
    chart.leftAxesContainer.layout = 'vertical'
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0
    dateAxis.renderer.ticks.template.length = 8
    dateAxis.renderer.ticks.template.strokeOpacity = 0.1
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.renderer.ticks.template.disabled = false
    dateAxis.renderer.ticks.template.strokeOpacity = 0.2
    dateAxis.renderer.minLabelPosition = 0.01
    dateAxis.renderer.maxLabelPosition = 0.99
    dateAxis.keepSelection = true
    dateAxis.minHeight = 30
    dateAxis.groupData = true
    dateAxis.minZoomCount = 5
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = true
    valueAxis.zIndex = 1
    valueAxis.renderer.baseGrid.disabled = true
    valueAxis.height = am4core.percent(65)
    valueAxis.renderer.gridContainer.background.fill = am4core.color('#000000')
    valueAxis.renderer.gridContainer.background.fillOpacity = 0.05
    valueAxis.renderer.inside = true
    valueAxis.renderer.labels.template.verticalCenter = 'bottom'
    valueAxis.renderer.labels.template.padding(2, 2, 2, 2)
    valueAxis.renderer.fontSize = '0.8em'
    let series = chart.series.push(new am4charts.CandlestickSeries())
    series.dataFields.dateX = 'Date'
    series.dataFields.openValueY = 'Open'
    series.dataFields.valueY = 'Close'
    series.dataFields.lowValueY = 'Low'
    series.dataFields.highValueY = 'High'
    series.clustered = false
    series.tooltipText = 'open: {openValueY.value}\nlow: {lowValueY.value}\nhigh: {highValueY.value}\nclose: {valueY.value}'
    series.name = 'MSFT'
    series.defaultState.transitionDuration = 0
    let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis2.tooltip.disabled = true
  // height of axis
    valueAxis2.height = am4core.percent(35)
    valueAxis2.zIndex = 3
  // this makes gap between panels
    valueAxis2.marginTop = 30
    valueAxis2.renderer.baseGrid.disabled = true
    valueAxis2.renderer.inside = true
    valueAxis2.renderer.labels.template.verticalCenter = 'bottom'
    valueAxis2.renderer.labels.template.padding(2, 2, 2, 2)
  // valueAxis.renderer.maxLabelPosition = 0.95;
    valueAxis2.renderer.fontSize = '0.8em'
    valueAxis2.renderer.gridContainer.background.fill = am4core.color('#000000')
    valueAxis2.renderer.gridContainer.background.fillOpacity = 0.05
    let series2 = chart.series.push(new am4charts.ColumnSeries())
    series2.dataFields.dateX = 'Date'
    series2.clustered = false
    series2.dataFields.valueY = 'Volume'
    series2.yAxis = valueAxis2
    series2.tooltipText = '{valueY.value}'
    series2.name = 'Series 2'
  // volume should be summed
    series2.groupFields.valueY = 'sum'
    series2.defaultState.transitionDuration = 0
    chart.cursor = new am4charts.XYCursor()
    let scrollbarX = new am4charts.XYChartScrollbar()
    let sbSeries = chart.series.push(new am4charts.LineSeries())
    sbSeries.dataFields.valueY = 'Close'
    sbSeries.dataFields.dateX = 'Date'
    scrollbarX.series.push(sbSeries)
    sbSeries.disabled = true
    scrollbarX.marginBottom = 20
    chart.scrollbarX = scrollbarX
    scrollbarX.scrollbarChart.xAxes.getIndex(0).minHeight = undefined
    /**
     * Set up external controls
     */
  // Date format to be used in input fields
    let inputFieldFormat = 'yyyy-MM-dd'
    document.getElementById('b1m').addEventListener('click', function () {
      let max = dateAxis.groupMax['day1']
      let date = new Date(max)
      am4core.time.add(date, 'month', -1)
      zoomToDates(date)
    })
    document.getElementById('b3m').addEventListener('click', function () {
      let max = dateAxis.groupMax['day1']
      let date = new Date(max)
      am4core.time.add(date, "month", -3)
      zoomToDates(date)
    })
    document.getElementById('b6m').addEventListener('click', function () {
      let max = dateAxis.groupMax['day1']
      let date = new Date(max)
      am4core.time.add(date, 'month', -6)
      zoomToDates(date)
    })
    document.getElementById('b1y').addEventListener('click', function () {
      let max = dateAxis.groupMax['day1']
      let date = new Date(max)
      am4core.time.add(date, 'year', -1)
      zoomToDates(date)
    })
    document.getElementById('bytd').addEventListener('click', function () {
      let max = dateAxis.groupMax['day1']
      let date = new Date(max)
      am4core.time.round(date, 'year', 1)
      zoomToDates(date)
    })
    document.getElementById('bmax').addEventListener('click', function () {
      let min = dateAxis.groupMin['day1']
      let date = new Date(min)
      zoomToDates(date)
    })
    dateAxis.events.on('selectionextremeschanged', function () {
      updateFields()
    })
    dateAxis.events.on("extremeschanged", updateFields)
    function updateFields () {
      let minZoomed = dateAxis.minZoomed + am4core.time.getDuration(dateAxis.mainBaseInterval.timeUnit, dateAxis.mainBaseInterval.count) * 0.5
      document.getElementById('fromfield').value = chart.dateFormatter.format(minZoomed, inputFieldFormat)
      document.getElementById('tofield').value = chart.dateFormatter.format(new Date(dateAxis.maxZoomed), inputFieldFormat)
    }
    document.getElementById('fromfield').addEventListener('keyup', updateZoom)
    document.getElementById('tofield').addEventListener('keyup', updateZoom)
    let zoomTimeout
    function updateZoom () {
      if (zoomTimeout) {
        clearTimeout(zoomTimeout)
      }
      zoomTimeout = setTimeout (function () {
        let start = document.getElementById('fromfield').value
        let end = document.getElementById('tofield').value
        if ((start.length < inputFieldFormat.length) || (end.length < inputFieldFormat.length)) {
          return
        }
        let startDate = chart.dateFormatter.parse(start, inputFieldFormat)
        let endDate = chart.dateFormatter.parse(end, inputFieldFormat)
        if (startDate && endDate) {
          dateAxis.zoomToDates(startDate, endDate)
        }
      }, 500)
    }
    function zoomToDates (date) {
      let min = dateAxis.groupMin['day1']
      let max = dateAxis.groupMax['day1']
      dateAxis.keepSelection = true
      // dateAxis.start = (date.getTime() - min)/(max - min);
      // dateAxis.end = 1;
      dateAxis.zoom({start:(date.getTime() - min)/(max - min), end:1})
    }
  }
}
</script>
<style>
#chartdiv {
  width: 100%;
  height: 500px;
  max-width: 100%;
}
</style>
