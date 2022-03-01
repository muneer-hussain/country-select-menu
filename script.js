let input = document.getElementById("country-searchbar")
let options = document.querySelector(".options")
let arrowDown = document.querySelector(".arrow-down")
let arrowUp = document.querySelector(".arrow-up")
let content = document.getElementById("content-wrapper")
let selected = document.getElementById("selectedJs");
let spin = `<i class = "fa fa-spinner fa-spin"></i>`
let arrow = `<i class="fa fa-angle-down arrow-down"></i>`;

// all countries array 

const country = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia",
    "Aruba", "Australia", "Austria", "Azerbaijan", "Åland Islands", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
    "Bolivia", "Bonaire", "Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil",
    "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Cayman Islands", "Central Africa", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling)", "Colombia",
    "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Curaçao",
    "Cyprus", "Czechia", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana",
    "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada",
    "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Honduras", "Hong Kong", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya",
    "Kiribati", "Korea", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique",
    "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco",
    "Mozambique", "Myanmar", "North Korea", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "North Macedonia",
    "Romania", "Russia", "Rwanda", "Réunion", "Saint Barthélemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland",
    "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates (the)", "United Kingdom of Great Britain and Northern Ireland (the)", "United States Minor Outlying Islands (the)", "United States of America", "Uruguay",
    "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"
];

arrowDown.addEventListener("click", function() {
    content.classList.toggle("contentWrapper")
    input.classList.toggle("countrySearchbar")
    options.classList.toggle("block")
})

input.addEventListener("input", function() {
    input.addEventListener("keyup", function() {
        let arr = [];
        let searchVal = input.value.toLowerCase()
        arr = country.filter(data => {
            return data.toLowerCase().startsWith(searchVal)
        }).map(data => `<li>${data}</li>`).join("")
        options.innerHTML = arr ? arr : `<li>${spin} \n\n\n Oops ! Country Not Found</li>`;

        options.addEventListener("click", function(e) {
            selected.innerText = e.target.innerText;
            input.value = "";
        })
    })
})