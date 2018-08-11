/**
 * 图片地址
 *
 * @export
 * @param {any} file
 * @returns
 */
export function parseFileURL (file) {
  return `${window.CONFIG.fileURL}${file}`;
}
