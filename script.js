// Simulate mediation suggestions (replace with actual API calls)
function getMediationSuggestions(userInput) {
    // Simulate AI response
    return ["Listen to both sides attentively.", "Try to find common ground.", "Consider involving a neutral mediator."];
}

// Event listener for the "Get Mediation Suggestions" button
document.getElementById("submit-btn").addEventListener("click", function () {
    const userInput = document.getElementById("user-input").value;
    const suggestions = getMediationSuggestions(userInput);
    const suggestionsList = document.getElementById("mediation-suggestions");

    // Clear existing suggestions
    suggestionsList.innerHTML = '';

    // Add new suggestions to the list
    suggestions.forEach((suggestion) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerText = suggestion;
        suggestionsList.appendChild(listItem);
    });
});
