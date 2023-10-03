<template>
    <div>
      <h2>Inventory Management</h2>
  
      <!-- Filter and Search -->
      <div class="p-d-flex p-jc-between p-ai-center p-mb-3" style="margin-bottom: 20px;">
        <div>
          <Dropdown v-model="selectedSort" :options="sortOptions" option-label="label" option-value="value" placeholder="Sort By"></Dropdown>&nbsp;
          <InputText v-model="searchText" placeholder="Search" @input="filterProducts"></InputText>
        </div>
      </div>
        <!-- Low Inventory Alert -->
        <Message severity="warn">Low inventory alert! Some products need restocking.</Message>

      <!-- Product List -->
      <DataTable :value="filteredProducts" :paginator="true" :rows="10" :rowsPerPageOptions="[5, 10, 20]" :rowClassName="highlightProduct">
        <Column field="name" header="Product Name"></Column>
        <Column field="inventory" header="Inventory" :rowStyleClass="rowStyleClass"></Column>
        <Column field="price" header="Price"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="restockRequired" header="Restock Required" :body="restockRequiredBodyTemplate"></Column>
        <Column :field="actionsField" header="Actions" :body="actionBodyTemplate"></Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  import { DataTable, Column } from 'primevue/datatable';
  import { Dropdown } from 'primevue/dropdown';
  import { InputText } from 'primevue/inputtext';
  import { Button } from 'primevue/button';
  import { Message } from 'primevue/message';
  
  export default {
    components: {
      DataTable,
      Column,
      Dropdown,
      InputText,
      Button,
      Message
    },
    data() {
      return {
        selectedSort: null,
        searchText: '',
        products: [
            { name: 'Smartphone', inventory: 50, price: '$399.99', category: 'Electronics', restockRequired: true },
            { name: 'Laptop', inventory: 25, price: '$799.99', category: 'Electronics', restockRequired: true },
            { name: 'Tablet', inventory: 30, price: '$299.99', category: 'Electronics', restockRequired: false },
            { name: 'Headphones', inventory: 40, price: '$149.99', category: 'Electronics', restockRequired: false },
            
            { name: 'Running Shoes', inventory: 30, price: '$89.99', category: 'Clothing', restockRequired: false },
            { name: 'T-Shirt', inventory: 45, price: '$19.99', category: 'Clothing', restockRequired: false },
            { name: 'Jeans', inventory: 20, price: '$49.99', category: 'Clothing', restockRequired: true },
            
            { name: 'Mystery Novel', inventory: 10, price: '$12.99', category: 'Books', restockRequired: true },
            { name: 'Sci-Fi Novel', inventory: 15, price: '$15.99', category: 'Books', restockRequired: false },
            
            { name: 'Board Game', inventory: 4, price: '$24.99', category: 'Toys', restockRequired: false },
            { name: 'Action Figure', inventory: 8, price: '$9.99', category: 'Toys', restockRequired: true },
            // Add more products as needed
        ],
      };
    },
    computed: {
      sortOptions() {
        return [
          { label: 'Name Asc', value: 'name-asc' },
          { label: 'Name Desc', value: 'name-desc' },
          { label: 'Inventory Asc', value: 'inventory-asc' },
          { label: 'Inventory Desc', value: 'inventory-desc' },
        ];
      },
      filteredProducts() {
        const filtered = this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchText.toLowerCase())
        );
  
        if (this.selectedSort) {
          const [field, order] = this.selectedSort.split('-');
          const multiplier = order === 'asc' ? 1 : -1;
          filtered.sort((a, b) => multiplier * (a[field] - b[field]));
        }
  
        return filtered;
      },
      lowInventoryAlert() {
        return this.products.some((product) => product.inventory < 10);
      },
    },
    methods: {

        rowStyleClass(rowData) {
            console.log(rowData);
            return rowData.inventory < 10 ? 'low-inventory' : '';
        },

        restockProduct(product) {
        // Implement restocking functionality here
        alert(`Restocking ${product.name}`);
        },

        restockRequiredBodyTemplate(rowData) {
        return rowData.restockRequired ? 'Yes' : 'No';
        },
        
        actionBodyTemplate(rowData) {
            return `
                <button class="p-button p-button-success" @click="restockProduct({` + rowData + `})">
                <i class="pi pi-refresh"></i>
                Restock
                </button>
            `;
        }
    },
  };
  </script>
  
  <style scoped>

    .low-inventory {
        background-color: #ffcccc; 
    }
  </style>