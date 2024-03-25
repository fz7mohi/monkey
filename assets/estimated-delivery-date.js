          function postalCodeCheckerAvailability() {

            const zipcodeValue = document.getElementById("zipcode").value;
            if (zipcodeValue) {
                const elements = document.getElementsByClassName("zipcode-all");
                for (const el of elements) {
                    el.style.display = "none";
                }
                if (document.getElementById(`zipcode-${zipcodeValue}`)) {
                    document.getElementById(`zipcode-${zipcodeValue}`).style.display = "block";
                    console.log(document.getElementsByClassName("active-tabs")[0].scrollHeight)
                    document.getElementsByClassName("active-tabs")[0].style.maxHeight = document.getElementsByClassName("active-tabs")[0].scrollHeight + "px";
                }
            } 
        }