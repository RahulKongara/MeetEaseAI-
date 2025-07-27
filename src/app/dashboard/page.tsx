import Header from "@/components/shared/Header";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <DashboardClient />
      </main>
    </div>
  );
}
