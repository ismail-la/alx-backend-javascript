export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [key, val] of map) {
      if (val === 1) {
        map.set(key, 100);
      }
    }
    return map;
  }
  throw new Error('Cannot process');
}
