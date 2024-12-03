import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const wc = new WooCommerceRestApi({
  url: "https://laajawabspices.com",
  consumerKey: process.env.CONSUMER_KEY! as string,
  consumerSecret: process.env.CONSUMER_SECRET! as string,
  version: "wc/v2",
});

export default wc;
