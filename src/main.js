import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import './assets/style.css'
import 'primevue/resources/themes/soho-light/theme.css';
import Dropdown from 'primevue/dropdown';
import Chart from 'primevue/chart';
import DataTable from 'primevue/datatable'
import Column from 'primevue/column';
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import FileUpload from 'primevue/fileupload'
import Message from 'primevue/message'


const app = createApp(App);

app.use(PrimeVue);

app.component('Dropdown', Dropdown);
app.component('Chart', Chart);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Button', Button)
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('FileUpload', FileUpload);
app.component('Message', Message);
app.use(store).use(router).mount('#app')
