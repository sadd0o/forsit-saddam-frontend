<template>
    <div class="card flex">
      <Sidebar class="p-sidebar" :visible="sidebarVisible" >
      <!-- Logo/Header -->
      <div class="p-d-flex p-jc-center p-ai-center sidebar-header">
        <img src="https://uploads-ssl.webflow.com/60a7d06c38ff1231a192798f/60a89d08d932b62ce9a78c5e_Asset%204.svg" alt="Logo" class="logo" />
      </div>
  
      <!-- Sidebar Links -->
        <ol class="p-list-unstyled">
        <li>
          <router-link to="/revenue-analysis" class="p-sidebar-link">
            <i class="pi pi-chart-bar"></i> Analytics
          </router-link>
        </li>
        <li>
          <router-link to="/inventory-management" class="p-sidebar-link">
            <i class="pi pi-shopping-cart"></i> Inventory
          </router-link>
        </li>
        <li>
          <router-link to="/product-registration" class="p-sidebar-link">
            <i class="pi pi-tags"></i> Products
          </router-link>
        </li>
        <!-- Add more sidebar links as needed -->
      </ol>
    </Sidebar>
    </div>
  </template>

<script>
export default {
  name: 'SidebarComponent',
  data() {
    return {
      sidebarVisible: false,
    };
  },
  // methods: {
  //   onShowSidebar() {
  //     this.sidebarVisible = true;
  //   },
  //   onHideSidebar() {
  //     this.sidebarVisible = false;
  //   },
  //   hideSidebar() {
  //     this.sidebarVisible = false;
  //   },
  // },
};
</script>

<style scoped>

/* Sidebar Styles */
@import 'primevue/resources/themes/saga-blue/theme.css';
@import 'primevue/resources/primevue.min.css';
@import 'primeicons/primeicons.css';

/* Sidebar Styles */
.p-sidebar {
  width: 250px;
  background-color: #073B3A;
  color: #fff;
  padding: 0;
}

.sidebar-header {
  padding: 1rem;
  text-align: center;
  background-color: #0B6E4F;
}

.logo {
  height: auto;
}

.p-sidebar-link {
  display: block;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
}

.p-sidebar-link:hover {
  background-color: #1a232a;
}

.router-link-active {
  background: #fff;
  color: #1a232a;
}

.router-link-active:hover {
  background: #fff;
  color: #1a232a;
}

</style>