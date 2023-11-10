const petsListEl = document.querySelector(".pets__list");

function displayPet(pet) {  
    const petEl = document.createElement('li');

    const nameEl = document.createElement("h3");
    nameEl.innerText = pet.name;

    const speciesEl = document.createElement("div");
    speciesEl.innerText = `Species: ${pet.species}`;

    const purposeEl = document.createElement("div");
    purposeEl.innerText = `Favourite thing to do: ${pet.purpose}`;
   
    petEl.append(
        nameEl,
        speciesEl,
        purposeEl,
    );

    petsListEl.appendChild(petEl);
}


























/** --------------- FORM SUBMISSION HERE --------------- */
/*

// listen for form submit event
const petFormEl = document.getElementById("petForm");

petFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const errorsListEl = document.getElementById("error-messages");
    errorsListEl.innerHTML = "";

    const errorMessages = [];
    if (!event.target.name.value) {
        errorMessages.push("Please enter your pet's name");
    }
    if (!event.target.species.value) {
        errorMessages.push("Please select a species");
    }

    if (errorMessages.length > 0){
        // Form is invalid.
        for (const error of errorMessages) {
            const errorEl = document.createElement("li");
            errorEl.innerText = error;
            
            errorsListEl.appendChild(errorEl);
        }

        return ; // immediately ends the function!
    }


    // TODO: What to do with out successful form submit?
})
*/


/*
[
    {
    "name": "Fat Cat",
    "species": "cat",
    "purpose": "Reduce Stress",
    "createdAt": "2023-11-10T10:59:51.607Z",
    "id": "1"
    },
    {
    "name": "Sansa",
    "species": "dog",
    "purpose": "Cuddles",
    "createdAt": "2023-11-10T10:59:51.607Z",
    "id": "2"
    },
    {
    "name": "Phil",
    "species": "dog",
    "purpose": "Exercise",
    "createdAt": "2023-11-10T10:59:51.607Z",
    "id": "3"
    },
    {
    "name": "Squiggz",
    "species": "dog",
    "purpose": "Exercise",
    "createdAt": "2023-11-10T10:59:51.607Z",
    "id": "4"
    }
] 
*/