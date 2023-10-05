import { Shop } from "@mui/icons-material";
import Home from "../pages/Frontend/Home/Home";
import Product_detail from "../pages/Product_detail";
import shop from "../pages/shop";

const RouterPublic = [
    { path: '/', component: Home},
    { path: '/product-detail', component: Product_detail },
    { path: '/shop', component: shop}


];
export default RouterPublic;