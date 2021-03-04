const baseUrl = 'https://friends-quotes-api.herokuapp.com/quotes/';

export const getQuotes = () => {
  return (
    fetch(`${baseUrl}`)
    .then(response => response.json())
  )
}
