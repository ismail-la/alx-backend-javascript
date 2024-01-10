export default function getStudentsByLocation(listStudents, xLocation) {
  return listStudents.filter(({ location }) => location === xLocation);
}
