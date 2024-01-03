export default function createEmployeesObject(departmentName, employees) {
  const eObj = {
    [departmentName]: employees,
  };
  return eObj;
}
