// denne koden fikk jeg fra Jo Bjørnar Sin ai (JBSA)


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission
        
        // Gather form data
        const formData = new FormData(form);
        
        // Send form data to the server
        const response = await fetch('/submit', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            // If submission is successful, clear the form
            form.reset();
        } else {
            // Handle error
            alert('Noe gikk galt! Vennligst prøv igjen.');
        }
    });
});