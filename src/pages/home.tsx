import { Button, Header, Layout, UpcomingPartyCard } from "@/components";

export default function Home() {
  return (
    <div>
      <Layout
        footer={<Button title="Next" />}
        header={<Header title="Hi, Ishita 👋" />}>
        <UpcomingPartyCard />
        <h2>Previous House Parties</h2>
      </Layout>
    </div>
  );
}
