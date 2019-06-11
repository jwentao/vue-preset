export const formatMonitorData = function (data, submetric) {
  if (submetric.indexOf('percent') > -1) {
    return data.toFixed(3);
  }
  if (submetric.indexOf('bytes') > -1) {
    return (data * 8 / 1024 / 1024).toFixed(5);
  }
  return data.toFixed(3);
};
