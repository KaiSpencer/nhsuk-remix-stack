import { Header } from "nhsuk-react-components";

const HeaderComponent = () => {
  return (
    <Header>
      <Header.Container>
        <Header.Logo href='/' />
        <Header.Content>
          <Header.MenuToggle />
        </Header.Content>
        <Header.ServiceName>NHSUK Remix Stack</Header.ServiceName>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href='/' mobileOnly>
          Home
        </Header.NavItem>
        <Header.NavItem href='/nested-routing'>Nested routing</Header.NavItem>
        <Header.NavItem href='/progressive-enhancement'>
          Progressive Enhancement
        </Header.NavItem>
      </Header.Nav>
    </Header>
  );
};

export { HeaderComponent as Header };
