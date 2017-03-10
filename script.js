
window.onload = function() {
    	var button = document.getElementById("but");
		button.addEventListener("click", showData, false);
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
					let tbody = document.getElementById("tableId");
										
					users.forEach((user) => {
						console.log(user.name);
							let tr = document.createElement('tr');
							let usersArray = [user.name, user.gender, user.company, user.age, user.email]
						
									for (let a = 0; a < usersArray.length; a++){ 
										  let td = document.createElement('td');
										  td.innerHTML = usersArray[a];
										  if (usersArray[a] == user.gender){td.classList.add("genderCompanyAge");}
										  if (usersArray[a] == user.company){td.classList.add("genderCompanyAge");}
										  if (usersArray[a] == user.age){td.classList.add("genderCompanyAge");}
										  tr.appendChild(td);
									}
									
									}
																
							tbody.appendChild(tr);
					});
			  }			
			}							
	}	
			