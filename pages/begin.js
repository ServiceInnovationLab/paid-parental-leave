import React from "react";
import LoremIpsum from "../components/LoremIpsum";
import PageTemplate from "../components/PageTemplate";
import { MDBBtn } from "mdbreact";

const Index = () => (
  <PageTemplate>
    <h1 className="h2">Te tono i te utu whakamatuatanga tiaki pēpē</h1>
    <h1 className="h2">Apply for paid parental leave</h1>
    <hr />
    <h2 className="h3">Gather your information</h2>
    <h3 className="h4">You will need</h3>
    <p>
      <LoremIpsum />
    </p>
    <div className="d-inline-flex flex-column justify-content-between align-items-center mt-3">
      <MDBBtn className="btn-rounded">Start new application</MDBBtn>
      <p className="mt-2 mb-2 pt-0">or</p>
      <MDBBtn outline color="primary" className="btn-rounded">
        Continue saved draft
      </MDBBtn>
    </div>
  </PageTemplate>
);

export default Index;
