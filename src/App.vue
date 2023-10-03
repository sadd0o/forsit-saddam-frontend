<template>
  <div class="flex app-container">
    <Sidebar />
    <div class="content flex-grow-1">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/SidebarComponent.vue';

export default {
  name: 'App',
  components: {
    Sidebar, // Register the Sidebar component
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* Style the content area */
.content {
  flex: 1; /* Allow the content area to grow and take remaining space */
  padding: 20px;
  overflow-y: auto; /* Add vertical scroll if content overflows */
}
</style>
