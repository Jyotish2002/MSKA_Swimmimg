document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = new URLSearchParams();
    for (const pair of formData) {
        data.append(pair[0], pair[1]);
    }

    fetch('https://script.google.com/macros/s/AKfycbwPCUXry4goBB_dJrNPAduMakY67lFjGRWfPak3mkW52jrS71QUzwpbd7Qiclc_Bxj2Dw/exec', {
        method: 'POST',
        body: data,
        mode: 'no-cors'
    }).then(() => {
        alert('Thanks for contacting with us. We shall get in touch with you soon.');
        form.reset();
    }).catch(error => {
        alert('There was a problem with your submission. Please try again.');
        console.error(error);
    });
});
