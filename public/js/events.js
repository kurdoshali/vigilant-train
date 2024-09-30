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
                const eventElement = document.createElement('div');
                eventElement.className = 'event';

                // Populate the event details inside the <div>
                eventElement.innerHTML = `
                    <h3>${event.title}</h3>
                    <p>Date: ${new Date(event.start_date).toLocaleDateString()} | Time: ${new Date(event.start_date).toLocaleTimeString()}</p>
                `;

                // Append the <div> to the <a> element
                eventLink.appendChild(eventElement);

                // Append the <a> element to the events container
                eventsContainer.appendChild(eventLink);
            });
            console.log(events);
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
});