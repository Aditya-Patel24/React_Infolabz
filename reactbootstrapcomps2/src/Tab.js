import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ControlledTabsExample() {
  const [key, setKey] = useState('home');
  return (
<>
    <h2>Controlled Tabs</h2>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
        </>
  );
}


function JustifiedExample() {
  return (
<>
    <h2>Justified Tabs</h2>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
      >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
        </>
  );
}




function Pilltab() {
  return (
    <div>
    <h2>Pill Tabs</h2>
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3" variant="pills">
      <Tab eventKey="home" title="Home">
        <p>Home content</p>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <p>Profile content</p>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <p>Contact content</p>
      </Tab>
    </Tabs>
  </div>
  );
}

export default ControlledTabsExample;
export { JustifiedExample, Pilltab };