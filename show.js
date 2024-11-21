document.addEventListener('DOMContentLoaded', function () {
    var urlHash = window.location.hash;
    if (urlHash) {
      var targetSections = document.querySelectorAll(urlHash + ', ' + urlHash + '-history_spots');
      if (targetSections.length > 0) {
        // Hide all content sections first
        var allSections = document.querySelectorAll('.cards-container');
        allSections.forEach(function (section) {
          section.style.display = 'none';
        });
        // Show the relevant content sections
        targetSections.forEach(function (section) {
          section.style.display = 'block';
        });
        targetSections[0].scrollIntoView();
      }
    }
  });
  