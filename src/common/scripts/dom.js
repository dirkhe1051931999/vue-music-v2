// 创建一个临时div元素来检测样式支持
const elementStyle = document.createElement('div').style;

// 检测浏览器供应商前缀
const vendor = (() => {
  const prefixes = ['webkit', 'Moz', 'O', 'ms', 'standard'];
  const transforms = prefixes.map((prefix) => (prefix === 'standard' ? 'transform' : `${prefix}Transform`));

  return prefixes[transforms.findIndex((t) => elementStyle[t] !== undefined)] || false;
})();

// 为CSS属性添加供应商前缀
export function prefixStyle(style) {
  if (!vendor) return false;
  if (vendor === 'standard') return style;
  return vendor + style.charAt(0).toUpperCase() + style.slice(1);
}