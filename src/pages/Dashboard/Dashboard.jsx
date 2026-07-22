import DashboardLayout from "../../layouts/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Dashboard Working</h1>
    </DashboardLayout>
  );
}
<DashboardLayout>
  <StatCard
    title="Average ATS"
    value={0}
    color="#ff6a00"
    icon={<Target />}
  />
</DashboardLayout>
export default Dashboard;
 