export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] }; // in order to make it private route

