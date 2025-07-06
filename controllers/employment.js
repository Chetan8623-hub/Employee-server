const EMPLOYEES = [
  {
    id: 1,
    name: "Chetan Jadhav",
    email: "cj258@gmail.com",
    mobile: "9876543210",
    position: "Frontend Developer",
    company: "TCS",
    salary: "6 LPA",
    joining: "2024-07-01"
  },
  {
    id: 2,
    name: "Jivitesh kale",
    email: "jivitesh28@gmail.com",
    mobile: "9988776655",
    position: "Java Developer",
    company: "Infosys",
    salary: "5.5 LPA",
    joining: "2023-12-15"
  }
];

const getEmployees = (req, res) => {
  res.json({
    success: true,
    data: EMPLOYEES,
    message: "Employees fetched successfully"
  });
};

const postEmployee = (req, res) => {
  const { id, name, email, mobile, position, company, salary, joining } = req.body;

  if (!id || !name || !email || !mobile || !position || !company || !salary || !joining) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  if (EMPLOYEES.find(emp => emp.id === id)) {
    return res.status(400).json({
      success: false,
      message: "Employee ID already exists"
    });
  }

  const newEmployee = { id, name, email, mobile, position, company, salary, joining };
  EMPLOYEES.push(newEmployee);

  res.status(201).json({
    success: true,
    data: newEmployee,
    message: "Employee added successfully"
  });
};

const deleteEmployeeById = (req, res) => {
  const { id } = req.params;
  const index = EMPLOYEES.findIndex(emp => emp.id == id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `No employee found with id: ${id}`
    });
  }

  EMPLOYEES.splice(index, 1);

  res.json({
    success: true,
    message: `Employee with id: ${id} deleted successfully`
  });
};

const getEmployeeById = (req, res) => {
  const { id } = req.params;
  const emp = EMPLOYEES.find(emp => emp.id == id);

  if (!emp) {
    return res.status(404).json({
      success: false,
      message: `No employee found with id: ${id}`
    });
  }

  res.json({
    success: true,
    data: emp,
    message: "Employee fetched successfully"
  });
};

const putEmployeeById = (req, res) => {
  const { id } = req.params;
  const { name, email, mobile, position, company, salary, joining } = req.body;

  const index = EMPLOYEES.findIndex(emp => emp.id == id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: `No employee found with id: ${id}`
    });
  }

  EMPLOYEES[index] = {
    id: parseInt(id),
    name,
    email,
    mobile,
    position,
    company,
    salary,
    joining
  };

  res.json({
    success: true,
    data: EMPLOYEES[index],
    message: `Employee with id: ${id} updated successfully`
  });
};

// ✅ Exporting with ES Modules
export {
  getEmployees,
  postEmployee,
  deleteEmployeeById,
  getEmployeeById,
  putEmployeeById
};
