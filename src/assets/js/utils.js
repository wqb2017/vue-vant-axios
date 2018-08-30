/**
 * 图片地址
 *
 * @export
 * @param {any} file
 * @returns
 */
export function parseFileURL (file) {
  return `${window.PLATFORM_CONFIG.fileURL}${file}`;
}
