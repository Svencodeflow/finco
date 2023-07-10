import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// 1. We are importing the defineConfig function from the Vite library. 2. We are calling the defineConfig function and passing an object to it that has two properties, plugins and server. 3. The plugins property is an array containing the react plugin that we imported from the @vitejs/plugin-react-refresh library. 4. The server property is also an object and contains the port and proxy properties. 5. The port property is set to 3500. This means that we are telling the Vite server to listen on port 3500 for incoming requests. 6. The proxy property is set to an object that contains the /api property. This means that any request that starts with /api will be proxied to the target http://localhost:3000/api. This is useful because we don't want to have to specify the full url when making requests to our backend API.
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3500,
        proxy: {
            "/api": { target: "http://localhost:3000" },
        },
    },
});
