import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  // _.slice(items, startIndex)
  // _.take(pageSize)
  // before chaining we should converts 'items' array to lodash wrapper: items => _(items)

  return _(items).slice(startIndex).take(pageSize).value(); // Chaining methods
}
