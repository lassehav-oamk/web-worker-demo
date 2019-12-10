onmessage = function(e) {
  console.log('Message received from main script');
  let randomValues = [];
  let dataMessage = {
    type: 'data',
    values: null
  }
  
  for(let i = 0; i < e.data.iterations; i++)
  {
    randomValues.push(Math.floor(Math.random() * e.data.maxRandom + e.data.minRandom, 0));
    if((i != 0) &&  (i % e.data.chunkSize == 0))
    {
      dataMessage.values = randomValues;
      postMessage(dataMessage);
      randomValues = [];
    }
  }    

  postMessage({
    type: 'close'
  });

  this.close();
}