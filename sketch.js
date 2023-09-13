let sentiment;
let statusEl;
let submitBtn;
let inputBox;
let sentimentResult;
let sentimentdisplay;
let value;

function setup() {
  noCanvas();
  // initialize sentiment
  sentiment = ml5.sentiment('movieReviews', modelReady);

  // setup the html environment
  statusEl = createP('Loading Model...');
  inputBox = createInput('Today is the happiest day and is full of rainbows!');
  inputBox.attribute('size', '75');
  submitBtn = createButton('submit');
  sentimentResult = createP('sentiment score:');
  sentimentdisplay = createP("Sentiment is ");





  

  // predicting the sentiment on mousePressed()
  submitBtn.mousePressed(getSentiment);
}

function getSentiment() {
  // get the values from the input
  const text = inputBox.value();

  // make the prediction
  const prediction = sentiment.predict(text);

  if(prediction.score < 0.25 && prediction.score> 0)
  {
    value = "Very Bad"
  }
  else if(prediction.score >=0.25 && prediction.score <0.5)
  {
    value = "Bad"
  }
  else if(prediction.score >= 0.5 && prediction.score < 0.75)
  {
    value = "Good"
  }
  else
  {
    value = "Very Good"
  }

  // display sentiment result on html page
  sentimentResult.html('Sentiment score: ' + prediction.score);
  sentimentdisplay.html('Sentiment is ' + value);
  
}

function modelReady() {
  // model is ready
  statusEl.html('model loaded');
}
