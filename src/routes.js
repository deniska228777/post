import Login from "./components/Login";
import PostIdPage from "./components/PostIdPage";
import About from "./pages/About";
import Posts from "./pages/Posts";

export const privateRoutes = [{
    path: '/about',
    component: <About/>
}, {
    path: '/posts',
    component: <Posts/>
}, {
    path: '/posts/:id',
    component: <PostIdPage/>
}, {
    path: '*',
    component: <div><h1>не туда</h1></div>,
}, {
    path: '/',
    component:<h1>аснавная страница</h1>
}, {
    path: '/login',
    component: <h1>вы успешно вошли в аккаунт!</h1>
}];

export const globalRoutes = [{
    path: '/login',
    component: <Login/>
}, {
    path: '*',
    component: <div><h1>не туда</h1></div>
}, {
    path: '/',
    component:<h1>аснавная страница</h1>
}];;