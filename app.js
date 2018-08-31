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
// while (true) {
  const userAction = prompt('which action do you want to perform: print, verify, contains, update, add, delete');
  switch (userAction) {

    case 'print':
      {
        for (let i = 0; i < employeeList.length; i++) {
          let user = employeeList[i]
          render(user.name, user.officeNum, user.phoneNum);
        }
        break;
      }
    case 'verify':
      {
        const verifyUser = prompt('verify by entering a name');
        let msg = 'false';
        for (let i = 0; i < employeeList.length; i++) {
          if (verifyUser === employeeList[i].name) {
            msg = 'true';
          }
        }
        render(msg);
        break;
      }

    case 'contains':
      {
        const query = prompt('contains');
        for (let i = 0; i < employeeList.length; i++) {
          let user = employeeList[i]
          if (user.name.indexOf(query) !== -1) {
            render(user.name, user.officeNum, user.phoneNum);
          }
        }
        break;
      }

    case 'update':
      {
        const updateUser = prompt('update: begin by entering a name');
        const updateField = prompt('enter a field to update: name, officeNum, phoneNum');
        for (let i = 0; i < employeeList.length; i++) {
          const user = employeeList[i]
          if (user.name === updateUser) {
            const updateValue = prompt('enter a value');
            user[updateField] = updateValue;
            render(`${user.name} ${user.officeNum} ${user.phoneNum}`);
          }
        }
        break;
      }

    case 'add':
      {
        const name = prompt('add name');
        const office = prompt('add office number');
        const phone = prompt('add phone number');
        for (let i = 0; i < employeeList.length; i++) {
          const newUser = {
            name: name,
            officeNum: office,
            phoneNum: phone
          }
        }
        employeeList.push(newUser);
        for (let i = 0; i < employeeList.length; i++) {
          let user = employeeList[i]
          render(user.name, user.officeNum, user.phoneNum);
        }
        render(employeeList.length, newUser);
        break;
      }
    case 'delete':
      {
        const query = prompt('to delete, enter user name');

        for (let i = 0; i < employeeList.length; i++) {
          let user = employeeList[i]
          if (user.name.indexOf(query) !== -1) {
            employeeList.splice(i, 1);
            render('deleted user', user.name, user.officeNum, user.phoneNum);
          }
        }
        break;
      }
  }
