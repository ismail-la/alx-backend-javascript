export default function getStudentIdsSum(list) {
  return list.reduce((acc, currentValue) => acc + currentValue.id, 0);
}
