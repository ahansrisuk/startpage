<template>
    <div class="container mx-auto flex h-full justify-center items-center">
        <div class="flex">
            <div>
                <DateTime />
                <LinkTable class="mt-10" /> 
            </div>
            <div class="self-start ml-20">
                <HelloWorld msg="Weather Placeholder"/>
            </div>
        </div>
        
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DateTime from './components/DateTime.vue';
import LinkTable from './components/LinkTable.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    DateTime,
    LinkTable
  },
};
</script>
