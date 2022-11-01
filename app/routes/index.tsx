import { Card } from "nhsuk-react-components";
import { Layout } from "~/components/Layout";
export default function Index() {
  return (
    <Layout>
      <Layout.TwoThirdsColumn>
        <h1>What is in this starter?</h1>
        <p>Preconfigured NHSUK Frontend and NHSUK React Components.</p>
        <h2>What is configured for you?</h2>
        <Card.Group>
          <Card.GroupItem width='one-half'>
            <Card clickable>
              <Card.Content>
                <Card.Heading className='nhsuk-heading-m'>
                  <Card.Link href='/nested-routing'>Nested Routing</Card.Link>
                </Card.Heading>
                <Card.Description>
                  See how only the page content will re-render when navigating,
                  leaving the header and footer in place.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
          <Card.GroupItem width='one-half'>
            <Card clickable>
              <Card.Content>
                <Card.Heading className='nhsuk-heading-m'>
                  <Card.Link href='/progressive-enhancement'>
                    Progressive Enhancement
                  </Card.Link>
                </Card.Heading>
                <Card.Description>
                  By default ship with no JS, add it as needed to <i>enhance</i>{" "}
                  the user experience.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
          <Card.GroupItem width='one-half'>
            <Card clickable>
              <Card.Content>
                <Card.Heading className='nhsuk-heading-m'>
                  <Card.Link href='#'>Money, work and benefits</Card.Link>
                </Card.Heading>
                <Card.Description>
                  How to pay for care and support, and where you can get help
                  with costs
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
          <Card.GroupItem width='one-half'>
            <Card clickable>
              <Card.Content>
                <Card.Heading className='nhsuk-heading-m'>
                  <Card.Link href='#'>Care after a hospital stay</Card.Link>
                </Card.Heading>
                <Card.Description>
                  Includes hospital discharge and care and support afterwards
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
        </Card.Group>
      </Layout.TwoThirdsColumn>
    </Layout>
  );
}
