import Form from './components/Form.vue';
import FormInput from './components/FormInput.vue';
import Index from './components/Index.vue';
import IndexSearch from './components/IndexSearch.vue';
import Input from './components/Input.vue';
import Pagination from './components/Pagination.vue';
import Table from './components/Table.vue';

const plugin = {
    install(app) {
        app.component('UiForm', Form);
        app.component('UiFormInput', FormInput);
        app.component('UiIndex', Index);
        app.component('UiIndexSearch', IndexSearch);
        app.component('UiInput', Input);
        app.component('UiPagination', Pagination);
        app.component('UiTable', Table);
    },
};

export { plugin };
