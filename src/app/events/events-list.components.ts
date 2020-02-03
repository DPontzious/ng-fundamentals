import { Component } from '@angular/core'

@Component({
    selector: "events-list",
    template: `
    <div>
        <h1>Upcoming Events</h1>
        <hr>
        <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div> Time:{{event.time}}</div>
        <div> Price: \${{ event.price }}</div>
        </hr>
        <div>
    `
})
export class EventListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: "02 / 12 / 2020",
        time: "10:00am",
        price: 39.0,
        location: {
            address: "hello fake 123",
            city: "This",
            country: "USA"
        }

    }
}

