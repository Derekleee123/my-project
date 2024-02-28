import React from 'react';
import { Button } from 'antd';
import ClientLogo from '../image/ClientLogo.png';
import ClientLogo2 from '../image/ClientLogo2.png';
import ClientLogo3 from '../image/ClientLogo3.png';
import ClientLogo4 from '../image/ClientLogo4.png';
import ClientLogo5 from '../image/ClientLogo5.png';
import ClientLogo6 from '../image/ClientLogo6.png';
import ClientLogo7 from '../image/ClientLogo7.png';
import ClientLogo8 from '../image/ClientLogo8.png';
import ClientLogo9 from '../image/ClientLogo9.png';
import ClientLogo10 from '../image/ClientLogo10.png';
import ClientLogo11 from '../image/ClientLogo11.png';
import ClientLogo12 from '../image/ClientLogo12.png';
import ClientLogo13 from '../image/ClientLogo13.png';
import ClientLogo14 from '../image/ClientLogo14.png';
import ClientLogo15 from '../image/ClientLogo15.png';
import '../style/Integrations.css';

function Integrations() {
  return (
    <div className="integrations">
      <main>
        <h1 className="title">More than 50 Integrations</h1>
        <div className="description">
          We integrate with more than 50 apps you use daily
        </div>

        <div className="icon-frame flex-center-center">
          <div className="column1 flex-between-center">
            <img src={ClientLogo} alt="ClientLogo" />
            <img src={ClientLogo2} alt="ClientLogo2" />
            <img src={ClientLogo3} alt="ClientLogo3" />
            <img src={ClientLogo4} alt="ClientLogo4" />
            <img src={ClientLogo5} alt="ClientLogo5" />
            <img src={ClientLogo6} alt="ClientLogo6" />
          </div>
          <div className="column2 flex-between-center">
            <img src={ClientLogo7} alt="ClientLogo7" />
            <img src={ClientLogo8} alt="ClientLogo8" />
            <img src={ClientLogo9} alt="ClientLogo9" />
            <img src={ClientLogo10} alt="ClientLogo10" />
            <img src={ClientLogo11} alt="ClientLogo11" />
          </div>
          <div className="column3 flex-between-center">
            <img src={ClientLogo12} alt="ClientLogo12" />
            <img src={ClientLogo13} alt="ClientLogo13" />
            <img src={ClientLogo14} alt="ClientLogo14" />
            <img src={ClientLogo15} alt="ClientLogo15" />
          </div>
        </div>

        <Button type="primary" className="button flex-center-center">
          View All Integrations
        </Button>

      </main>
    </div>
  );
}

export default Integrations;
