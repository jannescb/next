import Checkbox from './components/Checkbox.vue';
import Form from './components/Form.vue';
import FormCheckboxes from './components/FormCheckboxes.vue';
import FormInput from './components/FormInput.vue';
import FormTextarea from './components/FormTextarea.vue';
import Index from './components/Index.vue';
import Input from './components/Input.vue';
import Pagination from './components/Pagination.vue';
import Table from './components/Table.vue';
import Textarea from './components/Textarea.vue';

const plugin = {
    install(app) {
        app.component('UiCheckbox', Checkbox);
        app.component('UiForm', Form);
        app.component('UiFormCheckboxes', FormCheckboxes);
        app.component('UiFormInput', FormInput);
        app.component('UiFormTextarea', FormTextarea);
        app.component('UiIndex', Index);
        app.component('UiInput', Input);
        app.component('UiPagination', Pagination);
        app.component('UiTable', Table);
        app.component('UiTextarea', Textarea);
    },
};

export { plugin };
