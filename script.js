let ratingBtn = document.querySelectorAll(".rating-btn");
let submitBtn = document.querySelector(".submit-btn");
let cardContent = document.querySelector('.card-content');
let rating = document.querySelector(".rating");
let thankYou = document.querySelector(".thankyou.hidden");
let errorMessage = document.querySelector('.error-message');

ratingBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const activeBtns = document.querySelectorAll('.rating-btn.active')
        activeBtns.forEach(activeBtn => {
            activeBtn.classList.remove('active');
        });

        btn.classList.add('active');
    })
});

submitBtn.addEventListener('click', (e) => {
    const activeBtn = document.querySelector('.rating-btn.active');
    if (activeBtn === null) {
        errorMessage.classList.remove('hidden');
        return;
    }
    else {
        errorMessage.classList.add('hidden');
        const ratingNumber = activeBtn.innerText;
        const spanTextRating = document.querySelector('.rating-number');
        spanTextRating.innerText = ratingNumber;
        thankYou.classList.remove('hidden');
        cardContent.classList.add('hidden');
        rating.classList.add('hidden');
        e.target.classList.add('hidden');
    }

});