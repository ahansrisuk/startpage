<template>
    <div>
        <DateTime />
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DateTime from './components/DateTime.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DateTime,
  },
};
</script>
