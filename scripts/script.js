const petsListEl = document.querySelector(".pets__list");
const petsListLoadingEl = document.querySelector(".pets__loading");
const petsListLoadingErrorEl = document.querySelector(".pets__fetch-error--hidden");

/*
    - async function fetchPets()
        - Use axios
        - send a GET request to https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/pets
        - response.data will be an array of pet objects
        
        - loop over response.data 
            - each item is a pet
            - displayPet(each pet)
    
    fetchPets()
 */
async function fetchPets() {
    try {
        const response = await axios.get("https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/pets")
        
        petsListLoadingEl.classList.add("pets__loading--hidden");

        const pets = response.data; 
        
        pets.forEach((pet) => {
            displayPet(pet);
        })
    } catch (error) {
        console.error(error);
        
        petsListLoadingEl.classList.add("pets__loading--hidden");
        petsListLoadingErrorEl.classList.remove("pets__fetch-error--hidden");
    }
}

fetchPets()


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
const petFormEl = document.getElementById("petForm");

petFormEl.addEventListener("submit", async (event) => {
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


    try {
        // Send a POST request to API
        const response = await axios.post(
            "https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/pets",
            {
                name: event.target.name.value,
                species: event.target.species.value,
                purpose: event.target.purpose.value
            }
        )
        console.log(response);
        
        // Clear the List
        petsListEl.innerHTML = ""
        
        // GET the list again from the API
        fetchPets()
    } catch (error) {
        console.error(error);
    }
})