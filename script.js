window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".card");
    const characters = document.querySelectorAll(".character");
    const screenshots = document.querySelectorAll(".gallery img");

    function animate(elements) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0px)";

                }

            });

        }, {

            threshold: 0.15

        });

        elements.forEach(el => {

            el.style.opacity = "0";
            el.style.transform = "translateY(50px)";
            el.style.transition = "0.7s";

            observer.observe(el);

        });

    }

    animate(cards);
    animate(characters);
    animate(screenshots);

});


// Hero Button Animation

const playButton = document.querySelector(".playButton");

if (playButton) {

    setInterval(() => {

        playButton.style.transform = "scale(1.08)";

        setTimeout(() => {

            playButton.style.transform = "scale(1)";

        }, 300);

    }, 2500);

}


// Smooth Image Hover

document.querySelectorAll(".gallery img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


// Character Hover

document.querySelectorAll(".character").forEach(character => {

    character.addEventListener("mouseenter", () => {

        character.style.transform = "translateY(-10px)";

    });

    character.addEventListener("mouseleave", () => {

        character.style.transform = "translateY(0px)";

    });

});
