import { useNavigate } from "react-router";

import { Button, Header, Layout, UpcomingPartyCard } from "@/components";
import { routes } from "@/routes";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Layout
        footer={<Button title="Next" />}
        header={<Header title="Hi, Ishita 👋" />}>
        <UpcomingPartyCard onAction={() => navigate(routes.new.occasion)} />
        <h2>Previous House Parties</h2>
      </Layout>
    </div>
  );
}
