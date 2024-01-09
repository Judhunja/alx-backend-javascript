export default function updateStudentGradeByCity(students, city, newGrades) {
  const locationStudents = students
    .filter((x) => x.location === city)
    .map((x) => {
      const matchGrade = newGrades.find((grade) => x.id === grade.studentId);
      const grade = matchGrade ? matchGrade.grade : 'N/A';
      return { ...x, grade };
    });
  return locationStudents;
}
