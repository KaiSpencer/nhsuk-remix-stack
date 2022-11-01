import classnames from "classnames";

export const Layout = ({
  fluid = false,
  children,
}: {
  /**
   * If true, the layout will be full width and fit the size of the viewport.
   * @default false
   */
  fluid?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={classnames({
        "nhsuk-width-container": fluid === false,
        "nhsuk-width-container-fluid": fluid,
      })}
    >
      <main className='nhsuk-main-wrapper' id='maincontent' role='main'>
        <div className='nhsuk-grid-row'>{children}</div>
      </main>
    </div>
  );
};

Layout.TwoThirdsColumn = ({ children }: { children: React.ReactNode }) => {
  return <div className='nhsuk-grid-column-two-thirds'>{children}</div>;
};
