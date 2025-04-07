import { Button, Header, Layout } from "@/components";

export default function Home() {
  return (
    <div>
      <Layout
        footer={<Button title="Next" />}
        header={<Header title="Hi, Ishita 👋" />}>
        <h2>Previous House Parties</h2>
      </Layout>
    </div>
  );
}
