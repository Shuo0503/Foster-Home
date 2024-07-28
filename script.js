ocument.getElementById('waitingListForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Adding to the waiting list...';

    try {
        const response = await fetch('http://localhost:3000/api/waitinglist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email }),
        });
        const data = await response.json();
        if (response.ok) {
            outputElement.textContent = 'Successfully added to the waiting list!';
            fetchWaitingList();
        } else {
            outputElement.textContent = `Error: ${data.message}`;
        }
    } catch (error) {
        outputElement.textContent = `Error: ${error.message}`;
    }
});

async function fetchWaitingList() {
    const waitingListElement = document.getElementById('waitingList');
    waitingListElement.innerHTML = 'Loading...';

    try {
        const response = await fetch('http://localhost:3000/api/waitinglist');
        const data = await response.json();
        waitingListElement.innerHTML = data.map(entry => `<li>${entry.name} (${entry.email})</li>`).join('');
    } catch (error) {
        waitingListElement.innerHTML = `Error: ${error.message}`;
    }
}

// Fetch the waiting list on page load
fetchWaitingList();