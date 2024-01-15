export function formatInput(event: KeyboardEvent, maxlength?: number, onlyNumbers?: boolean) {
  const inputValue = (event.target as HTMLInputElement).value
  if (
    (onlyNumbers && event.key.length === 1 && isNaN(Number(event.key))) ||
    (maxlength && inputValue.replace(/\s/g, "").length >= maxlength)
  ) {
    event.preventDefault()
  }
}
