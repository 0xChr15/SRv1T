async function fetchData() {
    try {
      const response = await fetch('/api/endpoint');

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching data from the API.');
    }
  }

  fetchData();
