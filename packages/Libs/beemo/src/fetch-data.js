export default function fetchData(params) {
  return Promise.resolve({
    data: JSON.stringify(params),
  });
}
