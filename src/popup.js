function initialize() {
  console.log("Initializing timezone converter popup");
  console.log(moment.tz.names());
  let dataList = document.getElementById("timezones-list");

  let timezones = moment.tz.names();

  document
    .getElementById("timezone-search")
    .addEventListener("input", function () {
      const userInput = this.value.toLowerCase();
      dataList.innerHTML = ""; // Clear previous suggestions

      if (userInput.length === 0) {
        return; // Don't show suggestions if input is empty
      }

      const filteredSuggestions = moment.tz
        .names()
        .filter((suggestion) => suggestion.toLowerCase().startsWith(userInput));

      // Display filtered suggestions
      filteredSuggestions.forEach((suggestion) => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = suggestion;
        suggestionItem.classList.add("suggestion-item"); // Add a class for styling
        suggestionItem.addEventListener("click", () => {
          myInput.value = suggestion;
          dataList.innerHTML = ""; // Clear suggestions after selection
        });
        dataList.appendChild(suggestionItem);
      });
    });
}
document.addEventListener("DOMContentLoaded", initialize);
