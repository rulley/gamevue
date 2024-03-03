<script>
/**
 * Chartist line-area chart
 */
export default {
  data() {
    return {
      areaLineChart: {
        data: {
          labels: [1, 2, 3, 4, 5, 6, 7, 8],
          series: [
            [5, 9, 7, 8, 5, 3, 5, 4]
          ]
        },
        options: {
          low: 0,
          showArea: true,
          height: 300,
        }
      }
    }
  }
}
</script>
<template>
  <chartist ratio="ct-chart" :data="areaLineChart.data" :options="areaLineChart.options" type="Line"></chartist>
</template>
