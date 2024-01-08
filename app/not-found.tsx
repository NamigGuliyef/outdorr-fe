// pages/404.js
import { redirect } from "next/navigation";

const NotFoundPage = () => {
  redirect("/");
};

export default NotFoundPage;
