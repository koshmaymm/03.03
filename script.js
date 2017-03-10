
window.onload = function() {
    	let button = document.getElementById("but");
		button.addEventListener("click", showData, false);
		let buttonBones = document.getElementById("bones");
		buttonBones.addEventListener("click", throwBones, false);
};
  
	function showData(){
			var data = new XMLHttpRequest();
			
			data.open('GET', 'users.json', true);
			data.send();
			data.onreadystatechange = function(){

				if (data.readyState != 4) return;
				
				if (data.status != 200) {
				alert(data.status + ': ' + data.statusText);
				} else {
							let users = JSON.parse(data.responseText);
							let tableBody = document.getElementById("tableId");			
							users.forEach((user) => {
								console.log(user.name);
									let tr = document.createElement('tr');
									let usersArray = [user.name, user.gender, user.company, user.age, user.email]
							
										for (let a = 0; a < usersArray.length; a++){ 
											  let td = document.createElement('td');
											  td.innerHTML = usersArray[a];
											  if (usersArray[a] == user.gender || user.company || user.age){td.classList.add("genderCompanyAge");}
											  tr.appendChild(td);
										} 				
										
							tableBody.appendChild(tr);											
								
						});
			  }			
			}							
	}	
		
		
	function throwBones(){
		
		let min = 1, max = 6;
		let bonesExit = document.getElementById("bonesExit");
					
					(function randomDice(min, max) {
						  let rand = min + Math.random() * (max + 1 - min);
						  rand = Math.floor(rand);

						  let rand2 = min + Math.random() * (max + 1 - min);
						  rand2 = Math.floor(rand2);
						  
						  bonesExit.innerHTML = "Выпали цифры " + rand + " и " + rand2;
					})(min, max);
	}	