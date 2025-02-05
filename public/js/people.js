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
                const hometownField = person.hometown ? `<p><strong>Hometown:</strong> ${person.hometown}</p>` : '';
                const typeField = person.type ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>` : '';
                personElement.innerHTML = `
                    <div class="member-card bg-light p-3 text-center">
                        <img src="${person.picture_url}" alt="${person.name}" class="member-img">
                        <div class="member-info">
                            <h4>
                            ${person.name} 
                            ${typeField}
                            </h4>
                            ${positionField}
                            <p><strong>Major:</strong> ${person.major}</p>
                            ${minorField}
                            ${hometownField}
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