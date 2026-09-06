 const carousel = document.getElementById('carousel');
        const slides = document.getElementById('slides');
        const dots = document.querySelectorAll('.dot');

        let currentSlide = 0;

        const totalSlides = dots.length;

        function showSlide(index) {

            if (index < 0) {
                index = 0;
            }

            if (index >= totalSlides) {
                index = totalSlides - 1;
            }

            currentSlide = index;

            slides.style.transform =
                `translateX(-${currentSlide * 100}%)`;

            dots.forEach((dot, i) => {

                if (i === currentSlide) {

                    dot.classList.remove('text-textDark');
                    dot.classList.add('text-primary');

                } else {

                    dot.classList.remove('text-primary');
                    dot.classList.add('text-textDark');

                }

            });

        }



        dots.forEach(dot => {

            dot.addEventListener('click', () => {

                const slide = Number(dot.dataset.slide);

                showSlide(slide);

            });

        });


        let startX = 0;
        let endX = 0;


        carousel.addEventListener('touchstart', (event) => {

            startX = event.touches[0].clientX;

        });


        carousel.addEventListener('touchend', (event) => {

            endX = event.changedTouches[0].clientX;

            const difference = startX - endX;

            if (difference > 50) {
                showSlide(currentSlide + 1);
            }
            if (difference < -50) {
                showSlide(currentSlide - 1);
            }

        });
