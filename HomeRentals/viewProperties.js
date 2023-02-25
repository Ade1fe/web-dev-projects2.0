// function myFunction() {
//     var input, filter, div, hFive, p, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("myUL");
//     hFive = div.getElementsByTagName("h5");
//     for (i = 0; i < hFive.length; i++) {
//         p = hFive[i].getElementsByTagName("p")[0];
//         txtValue = p.textContent || p.innerText;
//         console.log("Hello World")
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             hFive[i].style.display = "";
//         } else {
//             hFive[i].style.display = "none";
//         }
//     }
// }

// $(document).ready(myFunction());

// carousel
//  var input, filter, div, hFive, p, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     div = document.getElementById("div");
//     hFive = div.getElementsByTagName("h5");
//     for (i = 0; i < hFive.length; i++) {
//         p = hFive[i].getElementsByTagName("p")[0];
//         txtValue = p.textContent || p.innerText;
//         console.log("Hello World")
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             hFive[i].style.display = "";
//         } else {
//             hFive[i].style.display = "none";
//         }
//     }







 var btn = document.getElementById('btn')

const  input = document.getElementById("myInput");
var filter, div, hFive, p, i, txtValue;
btn.addEventListener("click", () =>{
    console.log("1")
     var elements = document.getElementsByClassName('card-text'); // get the elements

// loop through the elements
for (var i = 0; i < elements.length; i++) {
     console.log("2")
    if (elements[i].innerHTML.indexOf(input) > -1) {
         console.log("3")
        alert('found'); // popup
    }
}

   
    
})
