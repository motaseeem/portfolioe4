function sendMail() {
    document.getElementById('form-contact').addEventListener('submit', function(event) {
        event.preventDefault();


        // these IDs from the previous steps
        emailjs.sendForm('service_xe9zafe', 'template_los628v', '#form-contact')
            .then(function() {
                alert('Email send! ✅');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}