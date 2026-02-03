import Navbar from "../Navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="pt-24 px-6">
        {children}
      </div>
    </>
  );
}

export default DashboardLayout;
