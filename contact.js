/*==================== contact ====================*/
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const result = document.getElementById('response');

    let isValid = true;
    let errorMessage = '';

    // Form validation
    if (!name) {
        isValid = false;
        errorMessage = 'Please enter your name.';
    } else if (!email) {
        isValid = false;
        errorMessage = 'Please enter your email.';
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessage = 'Please enter a valid email address.';
    } else if (!message) {
        isValid = false;
        errorMessage = 'Please enter your message.';
    }

    if (!isValid) {
        result.textContent = errorMessage;
        result.style.color = 'red';
        return;
    }

    // If valid, submit the form via fetch
    const formData = new FormData(this);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.textContent = 'Please wait...';
    result.style.color = 'black';

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.textContent = 'Sent!';
            //result.style.color = 'green';
            result.classList.add('success');
        } else {
            console.error(response);
            result.textContent = json.message || 'Submission failed.';
            result.style.color = 'red';
            result.classList.add('error');
        }
    })
    .catch(error => {
        console.error(error);
        result.textContent = 'Something went wrong!';
        //result.style.color = 'red';
        result.classList.add('error');
    })
    .finally(() => {
        setTimeout(() => {
            this.reset();
            result.classList.remove('success', 'error');
            result.textContent = '';
        }, 2000);
    });    
});    

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("hireMeButton").addEventListener("click", function() {
    var position = "[Position Name]";  // Replace with dynamic values if needed
    var company = "[Company Name]";   // Replace with dynamic values if needed

    var message = `Interested in hiring for the position of ${position} in ${company}.`;

    // Set the message in the textarea
    document.getElementById("message").value = message;

    // Scroll to the contact section
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
});

// Handle the navbar "Contact" click to refresh the contact section
document.getElementById("contactLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    
    // Scroll to the contact section smoothly
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });

    // Optional: Simulate refreshing the contact section by resetting the form fields
    setTimeout(function() {
        document.getElementById("message").value = '';
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
    }, 100);  // Reset form fields after 0.5 seconds (adjust if needed)
});