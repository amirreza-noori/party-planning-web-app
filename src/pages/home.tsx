import { Button, Header, Layout, UpcomingEventCard } from "@/components";

export default function Home() {
  return (
    <div>
      <Layout
        footer={<Button title="Next" />}
        header={<Header title="Hi, Ishita 👋" />}>
        <UpcomingEventCard />
        <h2>Previous House Parties</h2>
      </Layout>
    </div>
  );
}
