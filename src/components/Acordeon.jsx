import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <button
        type="button"
        style={{ fontSize: '2vw', border: 0, backgroundColor: 'transparent', width: '100%' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

function Acordeon({ title, name }) {
    return (
        <Accordion defaultActiveKey="0" style={{width:'80%', margin:'0 auto'}}>
          <Card className='card-customized' style={{borderColor: 'black', borderWidth:'3px'}}>
            <Card.Header className='card-customized' style={{backgroundColor: '#1c26b2c8'}}>
              <CustomToggle eventKey="0">{title}</CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body className='card-customized' style={{fontSize:'1.5vw', backgroundColor: "#9797fd"}}>{name}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      );
}

export default Acordeon;