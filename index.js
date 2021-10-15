function fun() {
    var no = document.getElementById("hii").value;
    var line1=document.createElement("hr");
    if(no>9){
    	alert("Maximum limit reached");
    	window.location.reload();
    }
    for(var i=1;i<=no;i++) {
        var textfield = document.createElement("input");
        document.head.innerHTML += `
        <style>
			input {
			  width: 100%;
			  padding: 10px 0;
			  font-size: 16px;
			  color: #fff;
			  margin-bottom: 30px;
			  border: none;
			  border-bottom: 1px solid #fff;
			  outline: none;
			  background: transparent;
			}
			label {
			  position: absolute;
			  top:0;
			  left: 0;
			  padding: 10px 0;
			  font-size: 16px;
			  color: #fff;
			  pointer-events: none;
			  transition: .5s;
			}

			input:focus ~ label,
			input:valid ~ label {
			  top: -20px;
			  left: 0;
			  color: #03e9f4;
			  font-size: 12px;
			}
			::placeholder {
			  color: red;
			  opacity: 1; 
			}
        </style>`;
        var line=document.createElement("br");
        var fullName = document.createElement("input");
	    fullName.name = "fullName";
	    fullName.type = "text";
	    fullName.required = "required";
	    fullName.placeholder="Enter Passenger "+i+" Name";
	    document.getElementById('form').appendChild(fullName);
        
	    var age = document.createElement("input");
	    age.name = "age";
	    age.type = "number";
	    age.required = "required";
	    age.placeholder="Enter Passenger "+i+" Age";
	    document.getElementById('form1').appendChild(age);
        
	    var gender = document.createElement("input");
	    gender.name = "gender";
	    gender.type = "text";
	    gender.required = "required";
	    gender.placeholder="Enter Passenger "+i+" Gender (M/F)";
	    document.getElementById('form2').appendChild(gender);
	    
       
    }
}
function myFunction() {
  var myobj=document.getElementById("form");
  var myobj1=document.getElementById("form1");
  var myobj2=document.getElementById("form2");
  myobj.remove();
  myobj1.remove();
  myobj2.remove();
}