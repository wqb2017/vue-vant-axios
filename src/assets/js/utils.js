/**
 * 图片地址
 *
 * @export
 * @param {any} file
 * @returns
 */
export function setImagesURL (file) {
  return `${window.CONFIG.fileURL}${file}`;
}
