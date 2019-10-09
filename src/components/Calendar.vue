<template>
<div>
    Calendar
    <table>
        <tr v-bind:key="event.id" v-for="event in events" class="text-xs">
            <td class="font-bold">{{ event.summary }}</td>
            <td>{{ event.start }}</td>
            <td>-</td>
            <td>{{ event.end }}</td>
        </tr>
    </table>
</div>
</template>

<script>
class Event {
    constructor() {
        this.id = '',
        this.summary = '',
        this.start = '',
        this.end = ''
    }
}

export default {
    name: 'Calendar',
    data: function() {
        return {
            calendarList: [],
            events: []
        }
    },
    methods: {
        signIn: function() {
            this.$gapi.signIn();
        },
        currentUser: function() {
           this.$gapi.currentUser()
                .then(user => {
                    if (user) {
                    console.log(user)
                    console.log('Signed in as %s', user.name)
                    } else {
                    console.log('No user is connected.')
                    }
                }) 
        },
        getAllCalendars: function() {
            this.$gapi.request({
                path: 'https://www.googleapis.com/calendar/v3/users/me/calendarList',
                method: 'GET'
            }).then(response => {
                console.log(response.result.items);
                this.calendarList = response.result.items
            }).catch(errors => {
                console.log(errors)
            })
        },
        getTodaysEvents: function() {
            var calendarList = this.calendarList;
            var params = "timeMin=2019-10-08T00:00:00-04:00&timeMax=2019-10-09T00:00:01-04:00"
            this.$gapi.request({
                path: 'https://www.googleapis.com/calendar/v3/calendars/ahansrisuk@gmail.com/events?' + params,
                method: 'GET',
            }).then(response => {
                console.log(response);
                var events = response.result.items;
                var i = 1;
                events.forEach(event => {
                    this.parseEvent(event, i)
                    i++
                });
            }).catch(errors => {
                console.log(errors)
            }) 
        },
        parseEvent: function(event, i) {
            var calEvent = new Event;
            calEvent.id = i;
            calEvent.summary = event.summary;
            calEvent.start = event.start.dateTime;
            calEvent.end = event.end.dateTime;
            this.events.push(calEvent);
        }
    },
    mounted: function() {
        this.signIn();
        this.getAllCalendars();
        this.getTodaysEvents();
    }
}
</script>

<style>

</style>