import { Layout } from "~/components/Layout";

export default function NestedRouting() {
  return (
    <Layout>
      <Layout.TwoThirdsColumn>
        <h1>Nested Routing</h1>
        <p>
          Firstly, if you are not familiar with Nested Routing in Remix, visit
          the
          <a
            target='_blank'
            href='https://remix.run/docs/en/v1/guides/routing#what-is-nested-routing'
          >
            {" "}
            docs{" "}
          </a>
          to see how it works.
        </p>
        <p>
          Take note of how the Header and the Footer components are rendered in
          the <u>root.tsx</u> file, this means that they will not re-render when
          you navigate between pages.
        </p>
      </Layout.TwoThirdsColumn>
    </Layout>
  );
}
