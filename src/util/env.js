
let baseURL

switch (process.env.NODE_ENV) {
  case "development":
    baseURL = "http://dev-mall-pre.springboot/api"
    break;
  case "test":
    baseURL = "http://test-mall-pre.springboot/api"
    break;
  case "prod":
    baseURL = "http://mall-pre.springboot/api"
    break;
  default:
    baseURL = "http://mall-pre.springboot/api"
    break;
}





export default { baseURL }