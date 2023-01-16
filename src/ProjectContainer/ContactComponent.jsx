import React,{useState} from 'react'
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
function ContactComponent() {
  const [name, setName] = useState("");
  const [email, setEmail]=useState("");
  const [message, setMessage]=useState("");
  return (
    <div className="my-10 home">
      <div className="header">
        <header className="display-5 p-5" >CAREERS</header>
      </div>
      <p><b>We are always in search of highly motivated students who are interested to work in the cutting-edge research areas of Plant Biotechnology, Marker Assisted Breeding, Stress Physiology, Transgenics and New Variety Development, Implementation of Artificial Intelligence and Machine Learning in Plant Breeding.

      Candidates having CSIR, UGC, DBT, ICMR, DST-INSPIRE or any individual Fellowship can apply for a Ph.D. position through IIT Kharagpur's Institutional website:
      <br/> 
      http://www.iitkgp.ac.in/admission-pg
      <br/>
      Post Doctoral Fellows (NPDF, WOS, RESEARCH ASSOCIATE) can inquire about available positions by filling the contact form below.</b></p>
      <div className="header">
        <header className="display-5 p-5" >REACH OUT TO US</header>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form>
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  
                />
              </Col>
            </FormGroup>          
            
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  
                />
              </Col>
            </FormGroup>            
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your message
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  value={message}
                  
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Email
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default ContactComponent