export default function currentYear(id) {
  const year = new Date().getFullYear();
  const spanYear = document.querySelector(`#${id}`);
  spanYear.textContent = year.toString();
}
