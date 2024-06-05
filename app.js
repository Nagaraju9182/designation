document.getElementById('addDesignation').addEventListener('click',function(){
    document.getElementById('formDiv').style.display = 'block';
});
document.getElementById('formsubmit').addEventListener('submit',function(event){
    event.preventDefault();
    const sNo = document.getElementById('sNo').value;
    const designation= document.getElementById('Designation').value;
    const department = document.getElementById('department').value;
    const display = document.getElementById('designationTable').getElementsByTagName('tbody')[0];
    const newRow= display.insertRow();
    const sNoCell = newRow.insertCell(0);
    const designationCell = newRow.insertCell(1);
    const departmentCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);
    sNoCell.textContent = sNo;
    designationCell.textContent = designation;
    departmentCell.textContent = department;
    const icon = document.createElement('ion-icon');
    icon.setAttribute('name','ellipsis-vertical-outline');
    actionCell.appendChild(icon);
    document.getElementById('formsubmit').reset();
    document.getElementById('formDiv').style.display = 'none';
});
