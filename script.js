const form = document.querySelector("form");

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const rating = document.querySelector('input[name="rating"]:checked');
            const feedback = document.getElementById('feedback').value.trim();

            if (name === '') {
                alert('Please enter your name.');
                return;
            }

            if (email === '') {
                alert('Please enter your email.');
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!rating) {
                alert('Please select a rating.');
                return;
            }

            if (feedback === '') {
                alert('Please enter your feedback.');
                return;
            }

            alert('We appreciate your feedback!');
            form.submit();
        });

document.querySelectorAll('.hover-text').forEach(function(span) {
            span.addEventListener('click', function() {
                this.classList.toggle('show');
            });
        });