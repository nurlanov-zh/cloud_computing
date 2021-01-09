module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions


    //To DO: add the pattern functions and describe the logic inside the function
  //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', getProductPrice);

    //Describe the logic inside the function
    function getProductPrice(msg, respond) {

      var entity = null;

      for (i = 0; i < mockData.length; i++) {
        if(msg.productId == mockData[i].product_id){
            entity = mockData[i];
        }
      }

      if(entity){
            var res = entity.product_price;
            respond(null, { result: res });
        }else{
          respond(null, { result: ''});
        }
    }
}
