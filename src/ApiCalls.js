const baseUrl = 'https://friends-quotes-api.herokuapp.com/quotes';

export const getQuotes = (number) => {
  return (
    fetch(`${baseUrl}/${number}`)
    .then(response => response.json())
  )
}
