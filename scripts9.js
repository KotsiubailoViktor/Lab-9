document.addEventListener('DOMContentLoaded', () => {
    const dogListElement = document.getElementById('dog-list');
    const modal = document.getElementById('dog-modal');
    const closeButton = document.getElementById('close-button');
    const modalDogImage = document.getElementById('modal-dog-image');
    const modalDogTitle = document.getElementById('modal-dog-title');
    const modalDogSex = document.getElementById('modal-dog-sex');
    const modalDogAge = document.getElementById('modal-dog-age');
    const modalDogDescription = document.getElementById('modal-dog-description');

    fetch('https://usersdogs.dmytrominochkin.cloud/dogs')
        .then(response => response.json())
        .then(dogs => {
            dogs.forEach(dog => {
                const dogCard = document.createElement('div');
                dogCard.classList.add('dog-card');
                dogCard.innerHTML = `
                    <img src="https://usersdogs.dmytrominochkin.cloud${dog.dogImage}" alt="${dog.title}">
                    <h3>${dog.title}</h3>
                    <p>${dog.sex}</p>
                `;
                dogCard.addEventListener('click', () => {
                    openModal(dog);
                });
                dogListElement.appendChild(dogCard);
            });
        });

    function openModal(dog) {
        modal.style.display = 'block';
        modalDogImage.src = `https://usersdogs.dmytrominochkin.cloud${dog.dogImage}`;
        modalDogTitle.textContent = dog.title;
        modalDogSex.textContent = `Sex: ${dog.sex}`;
        modalDogAge.textContent = `Age: ${dog.age}`;
        modalDogDescription.textContent = dog.description;
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
