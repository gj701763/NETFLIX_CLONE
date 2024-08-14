
const dts = document.querySelectorAll("dt"); 

    dts.forEach(dt => {
        dt.addEventListener("click", function() {
            const ddId = dt.getAttribute('aria-controls');
            const ddElement = document.getElementById(ddId);
            const plusIcon = this.querySelector(".plus-icon");
            const minusIcon = this.querySelector(".minus-icon");

            if (ddElement.classList.contains("hidden")) {
                ddElement.classList.remove("hidden");
                plusIcon.classList.add("hidden");
                minusIcon.classList.remove("hidden");
            } else {
                ddElement.classList.add("hidden");
                plusIcon.classList.remove("hidden");
                minusIcon.classList.add("hidden");
            }

        });
    });


