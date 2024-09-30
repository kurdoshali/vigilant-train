document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/people')
        .then(response => response.json())
        .then(people => {
            const peopleContainer = document.querySelector('.people-container');
            people.forEach(person => {
                console.log(person);
                const personElement = document.createElement('div');
                personElement.className = 'col-md-4';
                personElement.innerHTML = `
                    <div class="member-card bg-light p-3 text-center">
                        <img src="${person.picture_url}" alt="${person.name}" class="member-img">
                        <div class="member-info">
                            <h4>${person.name}</h4>
                            <p><strong>Major:</strong> ${person.major}</p>
                            <p><strong>Minor:</strong> ${person.minor}</p>
                            <p><strong>Hometown:</strong> ${person.hometown}</p>
                            <p class="member-bio">${person.biography}</p>
                        </div>
                    </div>
                `;
                peopleContainer.appendChild(personElement);
            });
        })
        .catch(error => {
            console.error('Error fetching people:', error);
        });
});