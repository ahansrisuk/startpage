<template>
<div>
    Calendar
</div>
  
</template>

<script>
export default {
    name: 'Calendar',
    data: function() {
        return {
            calendarList: []
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
           this.$gapi.request({
                path: 'https://www.googleapis.com/calendar/v3/freeBusy',
                method: 'POST',
                body: {
                    "timeMin": '2019-10-02T00:00:00-04:00',
                    "timeMax": '2019-10-03T00:00:01-04:00',
                    "timeZone": 'EDT',
                    "items": calendarList 
                }
            }).then(response => {
                console.log(response);
            }).catch(errors => {
                console.log(errors)
            }) 
        }
    },
    mounted: function() {
        this.signIn();
        this.getAllCalendars();
    }
}
</script>

<style>

</style>