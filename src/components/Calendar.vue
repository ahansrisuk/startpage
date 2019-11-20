<template>
<div>
    <table class="mt-2">
        <tr v-bind:key="event.id" v-for="event in events" class="text-xs">
            <td class="font-bold">{{ event.summary }}</td>
            <td class="pl-5">{{ event.start }}</td>
            <td class="pl-2">
                <span v-show="event.start != ''">-</span>
            </td>
            <td class="pl-2">{{ event.end }}</td>
        </tr>
    </table>
</div>
</template>

<script>

import calendars from '../../calendars';
const calendarList = calendars.ids

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
                this.getTodaysEvents();
            }).catch(errors => {
                console.log(errors)
            })
        },
        getTodaysEvents: function() {
            var params = "timeMin=2019-11-20T00:00:00-04:00&timeMax=2019-11-21T00:00:01-04:00"
            var i = 1;
            calendarList.forEach( calendarId => {
                this.$gapi.request({
                    path: 'https://www.googleapis.com/calendar/v3/calendars/' +
                        calendarId +
                        '/events?' + 
                        params,
                    method: 'GET',
                }).then(response => {
                    var events = response.result.items;
                    events.forEach(event => {
                        this.parseEvent(event, i)
                        i++
                    });
                }).catch(errors => {
                    console.log(errors)
                })
            })
        },
        parseEvent: function(event, i) {
            var calEvent = new Event;
            calEvent.id = i;
            calEvent.summary = event.summary.toLowerCase();
            calEvent.start = this.parseTime(event.start);
            calEvent.end = this.parseTime(event.end);
            this.events.push(calEvent);
            this.events.sort(function(a,b) {
                return a.start - b.start
            })
        },
        parseTime: function(time) {
            if (time.hasOwnProperty('dateTime')) {
                return time.dateTime.substr(11, 5);
            } else {
                return '';
            }
        }
    },
    mounted: function() {
        this.signIn();
        this.getTodaysEvents();
    }
}
</script>
