const wiseQuotes = {
  'Mark Twain': [
    'The secret of getting ahead is getting started.', 'Never regret anything that made you smile.', 'Twenty years from now you’ll be more disappointed by the things you did not do than the ones you did.', 'The two most important days in your life are the day you’re born and the day you find out why.', 'The man who does not read has no advantage over the man who cannot read.'
  ],
  'Eleanor Roosevelt': [
    'Do one thing every day that scares you.', 'Do what you feel in your heart to be right – for you’ll be criticized anyway.', 'Never allow a person to tell you no who doesn’t have the power to say yes.', 'You must do the thing you think you cannot do.', 'Learn from the mistakes of others. You can’t live long enough to make them all yourself.'
  ],
  'Albert Einstein': [
    'In the middle of every difficulty lies opportunity.', 'Try not to become a man of success, but rather become a man of value.', 'Life is like riding a bicycle. To keep your balance, you must keep moving.', 'The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.', 'We cannot solve our problems with the same thinking we used when we created them.'
  ]
}

const chooseQuote = (arr) => {
  let randNum = Math.floor(Math.random()*arr.length);
  return arr[randNum];
}

const makeMessage = (obj) => {
  let result = [];
  for(let key in obj){
    result.push(`"${chooseQuote(obj[key])}" - ${key}`)
  }
  return result;
}

let printQuotes = makeMessage(wiseQuotes);

for(let i=0; i<r.length; i++){
  setTimeout(() => {console.log(r[i])}, 2000*i)
}
