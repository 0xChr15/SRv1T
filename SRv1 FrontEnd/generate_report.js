// Select elements from the DOM
const loading = document.querySelector('#loading');
const generateButton = document.querySelector('#generate-report-button');

generateButton.addEventListener('click', () => {
    // Show loading indicator
    loading.style.display = 'block';

    // Simulate request to server
    setTimeout(() => {
        // When request is finished, hide loading indicator
        loading.style.display = 'none';
    }, 3000);
});

$(document).ready(function() {
    $('#generate').click(function() {
      $.get('/generate_report/docx', function(data) {
        $('#download').attr('href', data);
        $('#download').show();
      });
    });
  });
