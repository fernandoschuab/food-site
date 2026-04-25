import { route, index } from "@react-router/dev/routes";

export default [
  index("./pages/Home/Home.js"),
  route("about", "./pages/About/About.js"),
  route("menu", "./pages/Menu/Menu.js"),
  route("shop", "./pages/Shop/Shop.js"),
  route("blog", "./pages/Blog/Blog.js"),
  route("contact", "./pages/Contact/Contact.js"),
];