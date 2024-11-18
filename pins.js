document.addEventListener("DOMContentLoaded", function() {
    // Function to hide all sections
    function hideAllSections() {
        document.querySelectorAll('.cards-container').forEach(section => {
            section.classList.remove('show-flex');
        });
    }

    // Function to show sections based on country
    function showSections(country) {
        document.getElementById(`${country}-content`).classList.add('show-flex');
        document.getElementById(`${country}-history_spots`).classList.add('show-flex');
    }

    // Add event listeners to all pins
    document.querySelectorAll('.pin').forEach(pin => {
        pin.addEventListener('click', function() {
            // Hide all sections first
            hideAllSections();

            // Get the country code from the data attribute
            const country = this.getAttribute('data-country');

            // Show the relevant content sections
            showSections(country);
        });
    });
});
