<template>
    <div class="flex">
            <DailyWeather v-for="day in forecast"
                v-bind:day="day"
                v-bind:key="day.id"
            />
    </div>
</template>

<script>
import auth from '../../auth.js';
import DailyWeather from './DailyWeather.vue'

export default {
    name: 'Weather',
    components: {DailyWeather},
    data: function() {
        return {
            forecast: []
        }
    },
    methods: {
        getWeather: function() {
            const corsProxy = 'https://cors-anywhere.herokuapp.com/';
            const baseURI = 'https://api.darksky.net/forecast/';
            const api_key = auth.darksky;
            const request = corsProxy + baseURI + api_key + '/' + '39.32,-76.62';
            this.$http.get(request)
                .then((response) => {
                    var weeklyForecast = response.data.daily.data;
                    var i = 0;
                    for (let i = 0; i < 3 ; i++) {
                        var day = {};
                        day.id = i;
                        day.icon = weeklyForecast[i].icon;
                        day.high = Math.round(weeklyForecast[i].apparentTemperatureHigh);
                        day.low = Math.round(weeklyForecast[i].apparentTemperatureLow);
                        this.forecast.push(day);

                    }
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                })

        }
    },
    mounted: function() {
        this.getWeather();
    }
}
</script>
