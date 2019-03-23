const fetch = require("node-fetch");

exports.getCoins = async (req, res) => {
  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?tsym=USD&api_key=fe278748eb49ae23227e6769d92ef40bde306a9f0c3d91513b3c09680189c717";

  let response = await fetch(url);
  console.log("response", response);

  // only proceed once promise is resolved
  let json = await response.json();
  console.log("JSON", json);
  // only proceed once second promise is resolved

  let data = await json.Data;
  console.log("DATA", data);

  let dataArray = await data.map(object => {
    return object.DISPLAY.USD;
  });
  // return dataArray;
  console.log(dataArray);
};

getCoins();
