import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x11D534C24e1E411D52a81bCf405E9F8476BA2884"
);


export default instance;
