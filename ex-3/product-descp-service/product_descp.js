module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
      var entity = null;

      for (i = 0; i < mockData.length; i++) {
        if(msg.productId == mockData[i].product_id){
            entity = mockData[i];
        }
      }

      if(entity){
            var res = entity.product_url;
            respond(null, { result: res });
        }else{
          respond(null, { result: ''});
        }
    }


    function productName(msg, respond) {
        var entity = null;

      for (i = 0; i < mockData.length; i++) {
        if(msg.productId == mockData[i].product_id){
            entity = mockData[i];
        }
      }

      if(entity){
            var res = entity.product_name;
            respond(null, { result: res });
        }else{
          respond(null, { result: ''});
        }
    }
}
