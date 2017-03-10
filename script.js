
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
						
								let td1 = document.createElement('td');
								td1.innerHTML = user.name;
								tr.appendChild(td1);
								
								let td2 = document.createElement('td');
								td2.innerHTML = user.gender;
								td2.classList.add("genderCompanyAge");
								tr.appendChild(td2);
								
								let td3 = document.createElement('td');
								td3.innerHTML = user.company;
								td3.classList.add("genderCompanyAge");
								tr.appendChild(td3);
								
								let td4 = document.createElement('td');
								td4.innerHTML = user.age;
								td4.classList.add("genderCompanyAge");
								tr.appendChild(td4);
								
								let td5 = document.createElement('td');
								td5.innerHTML = user.email;
								td5.classList.add("mail");
								tr.appendChild(td5);
												
							tbody.appendChild(tr);
					});
			  }			
			}							
	}	
			