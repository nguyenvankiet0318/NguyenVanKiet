import Dashboard from "../pages/Backend/Dashboard/Dashboard";

import ProductCreate from "../pages/Backend/Product/ProductCreate";
import ProductList from "../pages/Backend/Product/ProductList";
import ProductShow from "../pages/Backend/Product/ProductShow";
import ProductUpdate from "../pages/Backend/Product/ProductUpdate";
import BrandCreate from "../pages/Backend/Brand/BrandCreate";
import BrandShow from "../pages/Backend/Brand/BrandShow";
import BrandList from "../pages/Backend/Brand/Brandlist";
import Brandupdate from "../pages/Backend/Brand/Brandupdate";
import Categorylist from "../pages/Category/Categorylist";
import CategoryCreate from "../pages/Category/CategoryCreate";
import Categoryupdate from "../pages/Category/Categoryupdate";
import CategoryShow from "../pages/Category/CategoryShow";



const RouterPrivate = [
    {path: '/admin', component:Dashboard},
    { path: "/admin/product", component:ProductList },
    { path: "/admin/product/create", component:ProductCreate },
    { path: "/admin/product/update/:id", component:ProductUpdate },
    { path: "/admin/product/show/:id", component:ProductShow},
    {path: '/admin/brand', component:BrandList},
    {path: '/admin/brand/create', component:BrandCreate},
    {path: '/admin/brand/update/:id', component:Brandupdate},
    {path: '/admin/brand/show/:id', component:BrandShow},
    {path: '/admin/category', component:Categorylist},
    {path: '/admin/category/create', component:CategoryCreate},
    {path: '/admin/category/update/:id', component:Categoryupdate},

    {path: '/admin/category/show/:id', component:CategoryShow},



];
export default RouterPrivate;