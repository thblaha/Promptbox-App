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


const userAction = prompt('which action do you want to perform: print, verify, lookup, contains, update, add, delete, office number');
switch ((userAction || '').toLowerCase()) {

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
      const verifyUser = prompt('verify: enter an employee name');
      let msg = 'false';
      for (let i = 0; i < employeeList.length; i++) {
        if (verifyUser.toLowerCase() === employeeList[i].name.toLowerCase()) {
          msg = 'true';
        }
      }
      render(msg);
      break;
    }
  case 'lookup':
    {
      const query = prompt('lookup: enter an employee name');
      for (let i = 0; i < employeeList.length; i++) {
        let user = employeeList[i]
        if (user.name.toLowerCase() === query.toLowerCase()) {
          render(user.name, user.officeNum, user.phoneNum);
        }
      }
      break;
    }

  case 'contains':
    {
      const query = prompt('contains: enter a string');
      for (let i = 0; i < employeeList.length; i++) {
        let user = employeeList[i]
        if (user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
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
        if (user.name.toLowerCase() === updateUser.toLowerCase()) {
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
      const newUser = {
        name: name,
        officeNum: office,
        phoneNum: phone
      }
      employeeList.push(newUser);
      for (let i = 0; i < employeeList.length; i++) {
        let user = employeeList[i]
        render(user.name, user.officeNum, user.phoneNum);
      }
      render(employeeList.length, newUser.toLowerCase());
      break;
    }
  case 'delete':
    {
      const query = prompt('to delete, enter user name');

      for (let i = 0; i < employeeList.length; i++) {
        let user = employeeList[i]
        if (user.name.indexOf(query) !== -1) {
          employeeList.splice(i, 1);
        }
      }
      for (let i = 0; i < employeeList.length; i++) {
        let user = employeeList[i]
        render(user.name, user.officeNum, user.phoneNum);
      }

      break;
    }
  case 'office number':
    {
      const query = prompt('find user by office number');

      for (let i = 0; i < employeeList.length; i++) {
        let user = employeeList[i]
        if (user.officeNum === Number(query)) {
          render(user.name, user.officeNum, user.phoneNum);
        }
      }
      break;
    }
}