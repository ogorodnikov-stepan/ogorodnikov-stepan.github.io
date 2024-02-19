export function getFileObject(name?: string) {
  return !name ? {} : {
    name,
    nav: name.split('-').pop(),
    t: name.split('-').pop()?.split('.')[0].toLowerCase(),
  }
}