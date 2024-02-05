const Moralis = require("moralis").default;
const {EvmChain} = require("@moralisweb3/common-evm-utils");
require("dotenv").config();

Moralis.start({

    apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjIyN2RjMzVkLTUwMGEtNDQwMy1iMzkyLWE5MTFmZTk2NDcyNiIsIm9yZ0lkIjoiMzY4NjM1IiwidXNlcklkIjoiMzc4ODYzIiwidHlwZUlkIjoiYmFlNjcxMWMtODQzNi00MjViLWI0MTQtYTNmZjY1MGZhMzQ4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDI4NzU2ODAsImV4cCI6NDg1ODYzNTY4MH0.rV6y2pwde8hgnOdfWQl0KBVrTw9wLkOtnVtXIL0QOhc",

});

async function Streams() {
    const options = {
       chains: [EvmChain.MUMBAI],
       description: "Listening to the transfers",
       tag : "transfers",
       includeContractLogs: false,
       includeNativeTxs: true,
       webhookUrl: "https://8138-103-59-75-180.ngrok-free.app/webhook", 
    }
    
  const Newstream = await Moralis.Streams.add(options);

  const {id} = Newstream.toJSON();

  const address = "0x970eA4a7F0F0872B5aC888f00B82E07f2aC31799";

  await Moralis.Streams.addAddress({address, id})

  console.log("fin");
}

Streams();
