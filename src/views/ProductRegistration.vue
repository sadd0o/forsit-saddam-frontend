<template>
    <div class="col-6">
      <h2>Product Registration</h2>
  
      <form class="p-grid p-fluid" @submit.prevent="registerProduct">
        <div class="p-field p-col-12 p-md-6 common-row-gap">
          <label for="name">Product Name</label>
          <InputText id="name" v-model="product.name" :class="{'p-invalid': submitted && !product.name}" />
          <div v-if="submitted && !product.name" class="p-error">Product Name is required.</div>
        </div>
        <div class="p-field p-col-12 p-md-6 common-row-gap">
          <label for="description">Description</label>
          <Textarea id="description" v-model="product.description" />
        </div>
        <div class="p-field p-col-12 p-md-6 common-row-gap">
          <label for="price">Price</label>
          <InputText id="price" v-model="product.price" :class="{'p-invalid': submitted && !product.price}" />
          <div v-if="submitted && !product.price" class="p-error">Price is required.</div>
        </div>
        <div class="p-field p-col-12 p-md-6 common-row-gap">
          <label for="stock">Initial Stock Level</label>
          <InputText id="stock" v-model="product.stock" :class="{'p-invalid': submitted && !product.stock}" />
          <div v-if="submitted && !product.stock" class="p-error">Initial Stock Level is required.</div>
        </div>
        <div class="p-field p-col-12 common-row-gap">
          <label for="image">Product Image</label>
          <FileUpload id="image" v-model="product.image" mode="basic" accept="image/*" @upload="onImageUpload" />
        </div>
        <div class="p-field p-col-12 common-row-gap">
          <Button label="Register Product" class="p-button-success" type="submit" />
        </div>
      </form>
  
      <Toast :visible="toastVisible" :severity="toastSeverity" :summary="toastSummary" :detail="toastDetail" :life="3000" @onClose="toastVisible = false" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { InputText } from 'primevue/inputtext';
  import { Textarea } from 'primevue/textarea';
  import { FileUpload } from 'primevue/fileupload';
  import { Button } from 'primevue/button';
  import { Toast } from 'primevue/toast';
  
  export default {
    components: {
      InputText,
      Textarea,
      FileUpload,
      Button,
      Toast,
    },
    data() {
      return {
        product: {
          name: '',
          description: '',
          price: '',
          stock: '',
          image: null,
        },
        submitted: false,
        toastVisible: false,
        toastSeverity: '',
        toastSummary: '',
        toastDetail: '',
      };
    },
    methods: {
      onImageUpload(event) {
        this.product.image = event.files[0];
      },
      registerProduct() {
        this.submitted = true;
  
        if (!this.product.name || !this.product.price || !this.product.stock) {
          this.toastSeverity = 'error';
          this.toastSummary = 'Validation Error';
          this.toastDetail = 'Please fill in all required fields.';
          this.toastVisible = true;
          return;
        }
  
        // Implement product registration logic here
        console.log('Product Registration:', this.product);
        // You can send the data to your backend API for storage and update the inventory
  
        // Clear the form and reset the submission state
        this.product = {
          name: '',
          description: '',
          price: '',
          stock: '',
          image: null,
        };
        this.submitted = false;
  
        // Show a success toast
        this.toastSeverity = 'success';
        this.toastSummary = 'Success';
        this.toastDetail = 'Product registered successfully.';
        this.toastVisible = true;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add PrimeFlex and custom styles here as needed */
  </style>