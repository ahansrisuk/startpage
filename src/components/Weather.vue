<template>
    <div class="flex">
        <div class="ml-8 text-xs">
            <span class="flaticon-016-sun block"></span>
            74°/68°
        </div>
        <div class="ml-8 text-xs">
            <span class="flaticon-010-raining"></span>
            <p class="text-xs">74°/68°</p>
        </div>
        <div class="ml-8 text-xs">
            <span class="flaticon-015-cloud"></span>
            <p class="text-xs">74°/68°</p>
        </div>
    </div>
</template>

<script>
import auth from '../../auth.js';

export default {
    name: 'Weather',
}
</script>
