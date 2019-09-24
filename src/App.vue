<template>
    <div class="container mx-auto flex h-full justify-center items-center">
        <div class="flex items-center">
            <div>
                <DateTime />
                <table class="table-auto">
                    <tr>
                        <td><b>SELF</b></td>
                        <td><a href="www.google.com"></a>google</td>
                    </tr>
                </table>
            </div>
            <div class="self-start ml-10">
                <HelloWorld msg="Weather Placeholder"/>
            </div>
        </div>
        
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
