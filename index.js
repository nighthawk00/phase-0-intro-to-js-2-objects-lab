// Write your solution in this file!
const employee = {
 name: "Vin",
 streetAddress: "591 Grey",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
 const updatedEmployee = { ...employee};

 updatedEmployee[key] = value;

 return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
 employee[key] = value;

 return employee;
}
