export default function getListStudentIds(locationlist) {
  if (Array.isArray(locationlist)) {
    return locationlist.map((obj) => obj.id);
  }
  return [];

}
