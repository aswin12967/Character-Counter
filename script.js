const textArea = document.getElementById("textArea");
        const counter = document.getElementById("counter");
        const warning = document.getElementById("warning");
        const maxChars = 200;

        textArea.addEventListener("input", function () {
            let typedChars = textArea.value.length;
            counter.textContent = `${typedChars}/${maxChars} Characters`;

            if(typedChars >= maxChars){
            warning.style.display = "block";
        }else {
            warning.style.display = "none";
        }
        });