import { redirect } from "next/navigation";

const Home = ({}) => {
  redirect("/admin/statistic");
};
export default Home;
