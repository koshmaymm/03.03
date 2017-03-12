window.onload = function() {
    	let button = document.getElementById("but");
		button.addEventListener("click", showData, false);
		let buttonBones = document.getElementById("bones");
		buttonBones.addEventListener("click", throwBones, false);
		let bonesStatistics = document.getElementById("bonesStatistics");
		bonesStatistics.addEventListener("click", showBonesStatistics, false);
		
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
				randomDice(min, max);
	}	
	function randomDice(min, max) {
				let rand = Math.floor(min + Math.random() * (max + 1 - min));
				let rand2 = Math.floor(min + Math.random() * (max + 1 - min));						
				rendertThrowBonesResult(rand, rand2); 	  
	}
	function rendertThrowBonesResult(a, b){
				bonesExit.innerHTML = "Выпали цифры " + a + " и " + b;
	}
	
	function showBonesStatistics(){
				let statisticsArray = [2,3,4,5,6,7,8,9,10,11,12];
				let resArray = [0,0,0,0,0,0,0,0,0,0,0];
				getNumber();
	
	
			function numberStartsStatistics(a,b,c){
						for (let i = 0; i < c; i++) {
						  randomStatistics(a,b);
						}				
				showStatistics();
			}
			
			function randomStatistics(min, max) {
						let rand = Math.floor(min + Math.random() * (max + 1 - min));
						let rand2 = Math.floor(min + Math.random() * (max + 1 - min));						
						let res = rand + rand2;
						
								for (let i = 0; i < statisticsArray.length; i++) {
									  if (statisticsArray[i] == (res) ) { resArray[i]++; }
								}
								
			}
			
			function showStatistics(){
								
				let li = document.createElement("li");
				let a = document.getElementById("idNumberCast").value;
				li.innerHTML = "Статистика выпадания цифр за " + a + " бросков" ;
				list.appendChild(li);
				
				for (let i = 0; i < statisticsArray.length; i++) {
					let li = document.createElement("li");
					li.innerHTML = statisticsArray[i] + " Выпадало " + resArray[i] + " раз ";
					list.appendChild(li);				  
				}
			}
			function getNumber(){
				let a = document.getElementById("idNumberCast").value;
				
					numberStartsStatistics(1,6,a);
				
			}
	}