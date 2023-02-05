const button = document.querySelector('#update-button');

button.addEventListener('click', async () => {
  try {
    const response = await fetch('/update-data');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    alert('Data was updated successfully.');
  } catch (error) {
    console.error(error);
    alert('An error occurred while updating the data.');
  }
});
