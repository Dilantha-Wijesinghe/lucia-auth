import { getUser } from "@/lib/lucia";

const DashboardPage = async () => {
  const user = await getUser();
  return <div>Dashboard</div>;
};

export default DashboardPage;
