/**
 * 数字格式化
 *
 * @export
 * @param {any} number 要格式化的数字
 * @param {any} decimals 保留几位小数
 * @param {any} decPoint 小数点符号
 * @param {any} thousandsSep 千分位符号
 * @returns
 */
export function numberFormat (number, decimals, decPoint, thousandsSep) {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  let n = !isFinite(+number) ? 0 : +number;
  let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  let sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
  let dec = typeof decPoint === 'undefined' ? '.' : decPoint;
  let s = '';
  let toFixedFix = function (n, prec) {
    let k = Math.pow(10, prec);
    return '' + Math.ceil(n * k) / k;
  };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  let re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
