export default function getListStudentIds(studentlist) {
  if (Array.isArray(studentlist)) {
    return studentlist.map((obj) => obj.id);
  }
  return [];
}
