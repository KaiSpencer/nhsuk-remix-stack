import { Layout } from "~/components/Layout";

export default function ProgressiveEnhancement() {
  return (
    <Layout>
      <Layout.TwoThirdsColumn>
        <h1>Progressive Enhancement</h1>
        <p>
          Everything in this application works without Javascript, with Remix
          Server Side Rendering doing most of the heavy lifting.{" "}
        </p>
        <h2>More on Progressive Enhancement</h2>
        <p>
          <a href='https://www.gov.uk/service-manual/technology/using-progressive-enhancement'>
            GOV UK - Building a resilient frontend using progressive enhancement
          </a>
        </p>
        <p>
          <a href='https://remix.run/docs/en/v1/pages/philosophy#progressive-enhancement'>
            Remix - Progressive Enhancement
          </a>
        </p>
      </Layout.TwoThirdsColumn>
    </Layout>
  );
}
