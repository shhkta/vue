var vue = new Vue({
    el: '#app',
    data: {
        result: '',
        event_value: '',
        event_target_value: ''
    },
    methods: {
        mouseevent: function (event) {
            console.log(event)
        },
        event: function (envet) {
            var value = event.target.value
            this.event_value = event[value]
        },
        eventTarget: function (envet) {
            var value = event.target.value
            this.event_target_value = event.target[value]
        }
    }
})