export default function createReportObject(employeesList) {
  const eObj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      const oLength = Object.keys(employeesList).length;
      return oLength;
    },
  };
  return eObj;
}
