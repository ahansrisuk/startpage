<template>
<div class="ml-8 text-xs">
    <span class="block" v-bind:class="getIcon(day.icon)"></span>
    {{ day.high }}°/{{ day.low }}°
</div>
</template>

<script>
export default {
    name: 'DailyWeather',
    props:[
        'day',
    ],
    methods: {
        getIcon: function(icon) {
            switch(icon){
                case 'clear-day' || 'clear-night':
                    return 'flaticon-016-sun';
                    break;
                case 'rain' || 'snow' || 'sleet':
                    return 'flaticon-010-raining';
                    break;
                case 'wind' || 'fog':
                    return 'flaticon-013-wind'
                case 'partly-cloudy-day' || 'partly-cloudy-night':
                    return 'flaticon-011-cloudy';
                    break;
            }
        }
    }
}
</script>