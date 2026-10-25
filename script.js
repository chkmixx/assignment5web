// 1

const userProfile = {
    name: "Tomiris",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["dancing", "producing w music", "playing football"]
};

function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

function updateProfileDisplay() {
    document.getElementById("displayName").textContent =
        userProfile.name;

    document.getElementById("displayAge").textContent =
        calculateAge(userProfile.birthYear);

    document.getElementById("displayDeveloper").textContent =
        userProfile.isDeveloper ? "Yes" : "No";

    document.getElementById("displayHobbies").textContent =
        userProfile.hobbies.length;
}

console.log("User Profile:", userProfile);
console.log("Age:", calculateAge(userProfile.birthYear));
console.log("Number of hobbies:", userProfile.hobbies.length);


// 2

const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const birthYear = Number(
        document.getElementById("birthYear").value
    );

    const currentYear = new Date().getFullYear();

    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    if (
        !Number.isInteger(birthYear) ||
        birthYear < 1900 ||
        birthYear > currentYear
    ) {
        alert("Please enter a valid birth year.");
        return;
    }

    userProfile.name = username;
    userProfile.birthYear = birthYear;

    updateProfileDisplay();
    profileForm.reset();
});


// 3

const hobbiesList = document.getElementById("hobbiesList");
const newHobbyInput = document.getElementById("newHobby");

function renderHobbies() {
    hobbiesList.replaceChildren();

    userProfile.hobbies.forEach(function(hobby) {
        const li = document.createElement("li");
        li.textContent = hobby;
        hobbiesList.appendChild(li);
    });

    updateProfileDisplay();
}

document.getElementById("addHobby").addEventListener("click", function() {
    const hobby = newHobbyInput.value.trim();

    if (hobby === "") {
        alert("Please enter a hobby.");
        return;
    }

    userProfile.hobbies.push(hobby);

    renderHobbies();
    newHobbyInput.value = "";
});

document.getElementById("removeHobby").addEventListener("click", function() {
    if (userProfile.hobbies.length === 0) {
        alert("There are no hobbies to remove.");
        return;
    }

    userProfile.hobbies.pop();

    renderHobbies();
});
renderHobbies();

