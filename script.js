const name = document.querySelector('#name');
const profession = document.querySelector('#profession');
const age = document.querySelector('#age');
const addUser = document.querySelector('#addUser');
let count = 1;

addUser.addEventListener('click',()=>{
    const displaymessage = document.querySelector('#displaymessage');

    if(name.value.length>0 && profession.value.length>0 && age.value>0){
        const addedEmployees = document.querySelector('#addedEmployees');
        const newEmployee = document.createElement('div');
        newEmployee.setAttribute('id',"newEmployee");
        const employeesList = document.querySelector('#employeesList')
        addedEmployees.appendChild(newEmployee);
        const  newEmployeediv1 = document.createElement('div');
        const  newEmployeediv2 = document.createElement('div');
        newEmployee.appendChild(newEmployeediv1);
        newEmployeediv1.setAttribute('id',"newEmployeediv1")
        newEmployee.appendChild(newEmployeediv2);
        count++;
         newEmployeediv1.innerHTML = `<span>Id : ${Math.floor(Math.random() * 100000)}</span>
                                 <span>Name : ${name.value} </span>
                                 <span>Profession : ${profession.value}</span>
                                 <span>Age : ${age.value}</span>`
        const deleteUser = document.createElement('button');
        deleteUser.setAttribute('id', "deleteUser");
        deleteUser.textContent = `Delete User`;
        newEmployeediv2.appendChild(deleteUser);
        employeesList.style.display = 'none';
        name.value ="";
        profession.value="";
        age.value="";
        displaymessage.style.color = 'green';
        displaymessage.textContent = `Success : Employee Added! `;    
        deleteUser.addEventListener('click',()=>{
            count--;
            newEmployee.remove();
            displaymessage.textContent = "";
            if(count<=1){                
                employeesList.style.display = 'block';
            }

            // employeesList.style.display = 'block';
        })

    }else{
        displaymessage.style.color = 'red';
        displaymessage.textContent = `Error : Please Make sure All the fields 
                                    are filled before adding in an employee ! `;
        

    }
} )
