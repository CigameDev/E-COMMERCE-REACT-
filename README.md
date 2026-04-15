# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

giải thích bản chất cardItems thay đổi
dù navbar hay bất cứ đâu,khi gọi addToCart thực chất là gọi hà trong ShopContext.jsx
hàm addToCart sẽ thực hiện setCardItems(...) dùng useState
vì cartItems là một useState nằm trong ShopContext nên khi thay đổi toàn bộ vùng Context đó bị đánh 
dấu cần phải render lại
--Tổng kết lại thì getCartCount ăn theo cartItems(useState) ,navbar sử dụng getCartCount để render đơn hàng dù ko thấy nó sử dụng useState nhưng nó vấn tự re render khi cartItems thay đổi 
