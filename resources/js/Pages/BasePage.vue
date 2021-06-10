<template>
    <container>
        <component
            :is="component.name"
            v-for="(component, index) in components"
            :key="index"
            v-bind="component.props"
        />
    </container>
</template>

<script>
import { defineComponent } from 'vue';
import Container from '../components/Container.vue';

export default defineComponent({
    components: { Container },
    name: 'BasePage',
    props: ['components'],
});
</script>
