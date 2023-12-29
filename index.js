function writeCards(names) {
    let thankYouMessages = [];
  
    names.forEach(function(name) {
        let message = `Thank you, ${name}, for the wonderful surprise gift!`;
      thankYouMessages.push(message);
    });
  
    return thankYouMessages;
  }
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
}