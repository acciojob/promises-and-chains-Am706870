document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission

            let name = document.getElementById("name").value.trim();
            let age = document.getElementById("age").value.trim();

            if (name === "" || age === "") {
                alert("Please enter both name and age.");
                return
			}
			age = parseInt(age);
			 
let mypromise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(age>=18){
		resolve(`Welcome, ${name} "You can vote.`)
		}else{
			reject(`Oh sorry ${name} You aren't old enough.`)
		}
		},4000)
			})

mypromise
	.then((message) => alert(message)) // Success message
	.catch((error) => alert(error)); 
})

// document.getElementById("myForm").addEventListener("submit", function(event) {
//             event.preventDefault(); // Prevent default form submission

//             let name = document.getElementById("name").value.trim();
//             let age = document.getElementById("age").value.trim();

//             // Validation: Ensure fields are not empty
//             if (name === "" || age === "") {
//                 alert("Please enter valid details.");
//                 return;
//             }

//             age = parseInt(age); // Convert age input to a number

//             // Promise logic with a 4-second delay
//             let checkAge = new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     if (age >= 18) {
//                         resolve(`Welcome, ${name}. You can vote.`);
//                     } else {
//                         reject(`Oh sorry ${name}. You aren't old enough.`);
//                     }
//                 }, 4000); // 4-second delay
//             });

//             checkAge
//                 .then((message) => alert(message)) // Success message
//                 .catch((error) => alert(error)); // Error message
//         });
