document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/people')
        .then(response => response.json())
        .then(people => {
            const peopleContainer = document.getElementById('people-container');
            people.forEach(person => {
                console.log(person);
                const personElement = document.createElement('div');
                personElement.className = 'col-md-4 mb-5';
                const minorField = person.minor ? `<p><strong>Minor:</strong> ${person.minor}</p>` : '';
                const positionField = person.position ? `<p><strong>Position:</strong> ${person.position}</p` : '';
                personElement.innerHTML = `
                    <div class="member-card bg-light p-3 text-center">
                        <img src="${person.picture_url}" alt="${person.name}" class="member-img">
                        <div class="member-info">
                            <h4>${person.name}</h4>
                            ${positionField}
                            <p><strong>Major:</strong> ${person.major}</p>
                            ${minorField}
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