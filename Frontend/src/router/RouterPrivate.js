import BrandCreate from "../page/Backend/Brand/BrandCreate";
import BrandShow from "../page/Backend/Brand/BrandShow";

import BrandList from "../pages/Backend/Brand/Brandlist";
import Brandupdate from "../page/Backend/Brand/Brandupdate";
import CategoryCreate from "../page/Backend/Category/CategoryCreate";
import CategoryShow from "../page/Backend/Category/CategoryShow";
import CategoryList from "../page/Backend/Category/Categorylist";
import Categoryupdate from "../page/Backend/Category/Categoryupdate";
import ContactCreate from "../page/Backend/Contact/ContactCreate";
import ContactList from "../page/Backend/Contact/ContactList";

import ContactUpdate from "../page/Backend/Contact/ContactUpdate";

import Dashboard from "../page/Backend/Dashboard";
import MenuCreate from "../page/Backend/Menu/MenuCreate";
import MenuList from "../page/Backend/Menu/MenuList";
import MenuShow from "../page/Backend/Menu/MenuShow";
import MenuUpdate from "../page/Backend/Menu/MenuUpdate";
import OrderCreate from "../page/Backend/Order/OrderCreate";
import OrderList from "../page/Backend/Order/OrderList";
import OrderShow from "../page/Backend/Order/OrderShow";
import OrderUpdate from "../page/Backend/Order/OrderUpdate";
import PostCreate from "../page/Backend/Post/PostCreate";
import PostList from "../page/Backend/Post/PostList";
import PostShow from "../page/Backend/Post/PostShow";
import PostUpdate from "../page/Backend/Post/PostUpdate";
import ProductCreate from "../page/Backend/Product/ProductCreate";
import ProductList from "../page/Backend/Product/ProductList";
import ProductShow from "../page/Backend/Product/ProductShow";
import ProductUpdate from "../page/Backend/Product/ProductUpdate";
import SliderCreate from "../page/Backend/Slider/SliderCreate";
import SliderList from "../page/Backend/Slider/SliderList";
import SliderShow from "../page/Backend/Slider/SliderShow";
import SliderUpdate from "../page/Backend/Slider/SliderUpdate";
import TopicCreate from "../page/Backend/Topic/TopicCreate";
import TopicList from "../page/Backend/Topic/TopicList";
import TopicShow from "../page/Backend/Topic/TopicShow";
import TopicUpdate from "../page/Backend/Topic/TopicUpdate";
import UserCreate from "../page/Backend/User/UserCreate";
import UserList from "../page/Backend/User/UserList";
import UserShow from "../page/Backend/User/UserShow";
import UserUpdate from "../page/Backend/User/UserUpdate";


const RouterPrivate = [
    {path: '/admin', component:Dashboard},
    {path: '/admin/brand', component:BrandList},
    {path: '/admin/brand/create', component:BrandCreate},
    {path: '/admin/brand/update/:id', component:Brandupdate},

    {path: '/admin/brand/show/:id', component:BrandShow},
    {path: '/admin/category', component:CategoryList},
    {path: '/admin/category/create', component:CategoryCreate},
    {path: '/admin/category/update/:id', component:Categoryupdate},

    {path: '/admin/category/show/:id', component:CategoryShow},
    {path: '/admin/contact', component:ContactList},
    {path: '/admin/contact/create', component:ContactCreate},
    {path: '/admin/contact/update/:id', component:ContactUpdate},

    {path: '/admin/menu', component:MenuList},
    {path: '/admin/menu/create', component:MenuCreate},
    {path: '/admin/menu/update/:id', component:MenuUpdate},
    {path: '/admin/menu/show/:id', component:MenuShow},

    { path: "/admin/product", component:ProductList },
    { path: "/admin/product/create", component:ProductCreate },
    { path: "/admin/product/update/:id", component:ProductUpdate },
    { path: "/admin/product/show/:id", component:ProductShow},

    { path: "/admin/order", component:OrderList },
    { path: "/admin/order/create", component:OrderCreate },
    { path: "/admin/order/update/:id", component:OrderUpdate },
    { path: "/admin/order/show/:id", component:OrderShow},

    { path: "/admin/slider", component:SliderList },
    { path: "/admin/slider/create", component:SliderCreate },
    { path: "/admin/slider/update/:id", component:SliderUpdate },
    { path: "/admin/slider/show/:id", component:SliderShow},

    { path: "/admin/topic", component:TopicList },
    { path: "/admin/topic/create", component:TopicCreate },
    { path: "/admin/topic/update/:id", component:TopicUpdate },
    { path: "/admin/topic/show/:id", component:TopicShow},

    { path: "/admin/user", component:UserList },
    { path: "/admin/user/create", component:UserCreate },
    { path: "/admin/user/update/:id", component:UserUpdate },
    { path: "/admin/user/show/:id", component:UserShow},

    { path: "/admin/post", component:PostList },
    { path: "/admin/post/create", component:PostCreate },
    { path: "/admin/post/show/:id", component:PostShow },
    { path: "/admin/post/update/:id", component:PostUpdate}

];
export default RouterPrivate;