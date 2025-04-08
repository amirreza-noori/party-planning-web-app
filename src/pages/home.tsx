import { useNavigate } from "react-router";

import { Header, UpcomingPartyCard } from "@/components";
import { MainLayout } from "@/layouts";
import { routes } from "@/routes";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <MainLayout header={<Header title="Hi, Ishita 👋" />}>
        <UpcomingPartyCard onAction={() => navigate(routes.new.occasion)} />
        <h2>Previous House Parties</h2>
      </MainLayout>
    </div>
  );
}
