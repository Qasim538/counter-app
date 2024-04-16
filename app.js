const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

let count = 0



btns.forEach(btn => {
    btn.addEventListener("click", function() {

        if(this.classList.contains("increase")) {
            count++
            // console.log(count);
        } else if (this.classList.contains("decrease")) {
            count--
            // console.log(count);
        } else if (this.classList.contains("reset")) {
            count = 0
            // console.log(count);
        }

        if (count > 0) {
            value.style.color = "limegreen"
        }
        if (count < 0) {
            value.style.color = "red"
        } if (count === 0) {
            value.style.color = "orange"
        }
        value.textContent = count;
    })

})