const employeeList = [{
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

// print
for (let i = 0; i < employeeList.length; i++) {
  let user = employeeList[i]
  render(user.name, user.officeNum, user.phoneNum);
}

// verify
const verifyUser = prompt('enter a name');
for (let i = 0; i < employeeList.length; i++) {
  if (verifyUser === employeeList) {
    let msg = '';
    msg = 'true'
  } else {
    msg = 'false';
  }
}
render(msg);

contains
const query = prompt('contains');
for (let i = 0; i < employeeList.length; i++) {
  let user = employeeList[i]
  if (user.name.indexOf(query) !== -1) {
    render(user.name, user.officeNum, user.phoneNum);
  }
}

//update
const updateUser = prompt('enter a name');
for (let i = 0; i < employeeList.length; i++) {
  const user = employeeList[i]
  if (user.name === updateUser) {
    const updateField = prompt('enter a field to update: name, officeNum, phoneNum');
    const updateValue = prompt('enter a value');
    user[updateField] = updateValue;
    render(`${user.name} ${user.officeNum} ${user.phoneNum}`)
  }

add
const name = prompt('add name');
const office = prompt('add office number');
const phone = prompt('add phone number');
const newUser = {
  name: name,
  officeNum: office,
  phoneNum: phone
}
employeeList.push(newUser);
for (let i = 0; i < employeeList.length; i++){
  let user = employeeList[i]
  render(user.name, user.officeNum, user.phoneNum);
}

delete
const query = prompt('contains');
for (let i = 0; i < employeeList.length; i++) {
  let user = employeeList[i]
  if (user.name.indexOf(query) !== -1) {
       employeeList.splice(i, 1);
    render(user.name, user.officeNum, user.phoneNum);
  }
}