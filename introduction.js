let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const isEndPage = window.location.pathname.endsWith('end.html');

// Show the current slide based on index
function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = slides.length - 1; // Prevent going past the last slide
    } else if (index < 0) {
        currentSlideIndex = 0; // Prevent going past the first slide
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // Show the current slide
    slides[currentSlideIndex].style.display = "flex";

    prevArrow.style.display = currentSlideIndex === 0 && !isEndPage ? 'none' : 'block';
    prevArrow.onclick = () => {
        if (currentSlideIndex === 0 && isEndPage) {
            window.location.href = 'game.html';
        } else {
            changeSlide(-1);
        }
    };

    // Check if it's the last slide
    if (currentSlideIndex === slides.length - 1) {
        // For end.html, hide the next arrow on the last slide
        if (isEndPage) {
            nextArrow.style.display = 'none';
        } else {
            nextArrow.textContent = "-›"; // Change Next button text
            nextArrow.onclick = () => {
                window.location.href = "game.html"; // Redirect to game.html when clicked
            };
            nextArrow.style.display = 'block';
        }
    } else {
        nextArrow.textContent = "›"; // Restore the default Next arrow
        nextArrow.onclick = () => changeSlide(1); // Continue to the next slide
        nextArrow.style.display = 'block';
    }
}

// Initialize the first slide and arrows
showSlide(currentSlideIndex);

// Change slide when clicking next/prev buttons
function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}

function checkAnswerSlide2() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback4 = document.getElementById('feedback-2'); // Ensure feedback element is selected

    if (!selectedAnswer) {
        feedback4.innerHTML = "Bitte wählen Sie eine Antwort aus!";
        feedback4.style.display = "block";
        return;
    }

    if (selectedAnswer.value === "A") {
        feedback4.innerHTML = "Richtig!";
        feedback4.style.display = "block";
        nextArrow.style.display = "block"; // Show the next arrow so they can continue
    } else {
        feedback4.innerHTML = `Falsch! Die richtige Antwort ist: <strong>"A"</strong>`;
        feedback4.style.display = "block";
    }
}
