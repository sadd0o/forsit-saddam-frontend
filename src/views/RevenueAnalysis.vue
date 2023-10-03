<template>
    <div>
      <h2>Revenue Analysis</h2>
  
      <!-- Display total orders and sales in a block box -->
    <div class="summary-box">
      <div class="summary-item-orders">
        <p>Total Orders</p>
        <p>{{ totalOrders }}</p>
      </div>
      <div class="summary-item-sales">
        <p>Total Sales (Revenue)</p>
        <p>{{ totalSales }}</p>
      </div>
    </div>
  
      <!-- Filter by product categories -->
      <div>
        <label for="categoryFilter">Filter by Category:</label>&nbsp;&nbsp;
        <Dropdown
          v-model="selectedCategory"
          :options="categories"
          option-label="label"
          option-value="value"
          id="categoryFilter"
        ></Dropdown>
      </div>
  
      <!-- PrimeVue chart to visualize revenue trends -->
      <Chart :type="chartType" :data="chartData" :options="chartOptions"></Chart>
    </div>
  </template>
  
  <script>
  import { Dropdown } from 'primevue/dropdown';
  import { Chart } from 'primevue/chart';
  
  export default {
    components: {
      Dropdown,
      Chart,
    },
    data() {
      return {
        totalOrders: 1500,
        totalSales: 75000,
        selectedCategory: '',
        categories: [
          { label: 'Electronics', value: 'electronics' },
          { label: 'Clothing', value: 'clothing' },
          { label: 'Books', value: 'books' },
          { label: 'Toys', value: 'toys' },
        ],
        chartType: 'line',
        chartData: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
          datasets: [
            {
              label: 'Revenue',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              data: [5000, 7000, 9000, 6500, 8000, 9500, 11000],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };
    },
    mounted() {
    // Set the default category to the first item in the dropdown
    this.selectedCategory = this.categories[0].value;

    // Initialize the chart data based on the default category
    this.updateChartData(this.selectedCategory);
  },
    watch: {
      selectedCategory: 'updateChartData',
    },
    methods: {
      updateChartData(newCategory) {
      // Define data for each product category
      const categoryData = {
        electronics: [5500, 7200, 8600, 6200, 7800, 9400, 11200],
        clothing: [4000, 5400, 6700, 4800, 6300, 7200, 8500],
        books: [3000, 3800, 4200, 3600, 4200, 4900, 5800],
        toys: [2500, 3200, 3800, 2700, 3400, 4200, 5000],
      };
  
      // Update the chart data based on the selected category
      this.chartData.datasets[0].data = categoryData[newCategory];
    },
  },
  };
  </script>
  
  <style>
.summary-box {
  display: flex;
  justify-content: space-between;
  padding: 0px;
  border-radius: 5px;
  margin: 40px 0;
  gap: 30px;
}

.summary-item-orders, .summary-item-sales {
  text-align: center;
  flex: 1;
  padding: 10px;
  font-weight: bold;
  font-size: 26px;
  color: #f2f2f2;
}

.summary-item-orders:hover, .summary-item-sales:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.summary-item-orders {
    background: #08A045 !important;
}

.summary-item-sales {
    background: #6BBF59 !important;
}

</style>