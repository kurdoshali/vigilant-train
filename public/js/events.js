document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById('events-container');

            events.forEach(event => {
                
                // Create the <a> element
                const eventLink = document.createElement('a');
                eventLink.className = 'a-events';
                eventLink.href = `/event/${event.id}`;  // Link to the specific event page

                // Create the <div> element for the event content
                // const eventElement = document.createElement('div');
                // eventElement.className = 'event';
                const eventDate = new Date(event.start_date);
                const formattedDate = eventDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
                const formattedTime = eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                // Populate the event details inside the <div>
                eventLink.innerHTML = `
                    <div class="event-header">
                        <h3>${event.title}</h3>
                    </div>
                    <div class="event-body">
                        <div class="event-date">${formattedDate}</div>
                        <div class="event-time">${formattedTime}</div>
                    </div>
                `;

                // Append the <div> to the <a> element
                // eventLink.appendChild(eventLink);

                // Append the <a> element to the events container
                eventsContainer.appendChild(eventLink);
            });
            console.log(events);
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
});