document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/events')
        .then(response => response.json())
        .then(events => {
            const eventsContainer = document.getElementById('events-container');

            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event';

                eventElement.innerHTML = `
                    <h2><a href="/event/${event.id}">${event.title}</a></h2>
                    <p>${event.description}</p>
                    <p><strong>Start:</strong> ${new Date(event.start_date).toLocaleString()}</p>
                    <p><strong>End:</strong> ${new Date(event.end_date).toLocaleString()}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                `;

                eventsContainer.appendChild(eventElement);
            });
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
});