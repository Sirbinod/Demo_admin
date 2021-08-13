import React, { useState } from "react"
import MetaTags from "react-meta-tags"

import {
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Button,
  CardTitle,
  CardSubtitle,
  Label,
  Input,
  Container,
  CustomInput,
} from "reactstrap"
import { AvForm, AvField } from "availity-reactstrap-validation"
import Select from "react-select"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const SubscriptionBuy = () => {
  //for change tooltip display propery
  function changeHandeler(event, eleId) {
    if (event.target.value !== "")
      document.getElementById(eleId).style.display = "none"
    else document.getElementById(eleId).style.display = "block"
  }
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup)
  }
  const optionGroup = [
    { label: "Mustard", value: "Mustard" },
    { label: "Ketchup", value: "Ketchup" },
    { label: "Relish", value: "Relish" },
  ]
  const [selectedMulti, setselectedMulti] = useState(null)
  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Form Validation </title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="Form" breadcrumbItem="Form Validation" />

          <Row>
            <Col xl="6">
              <Card>
                <CardBody>
                  <Row>
                    <Col lg="12">
                      <FormGroup className="mb-3">
                        <Label
                          className="form-check-label"
                          htmlFor="invalidCheck"
                        >
                          Company Name
                        </Label>

                        <Select
                          value={selectedMulti}
                          isMulti={true}
                          onChange={() => {
                            handleMulti()
                          }}
                          options={optionGroup}
                          classNamePrefix="select2-selection"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-3">
                        <Label htmlFor="validationCustom01">Email</Label>
                        <Input
                          name="firstname"
                          placeholder="xxxx-xxxx-xxxx"
                          type="text"
                          id="validationCustom01"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl="6">
              <Card>
                <CardBody>
                  <div className="d-flex justify-content-between">
                    <h5>Advance Plan</h5> <h5>$200</h5>
                  </div>
                  <div className="border-top mt-3 mb-3"> </div>
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <h6>Advance Plan</h6> <h6>$00</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                      <h6>Advance Plan</h6> <h6>$00</h6>
                    </div>
                  </div>
                  <div className="border-top mt-3 mb-3"> </div>
                  <div className="d-flex justify-content-between">
                    <h5>Total Price</h5> <h5>$200</h5>
                  </div>
                  <Button color="primary" type="submit" className="my-2">
                    Submit form
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default SubscriptionBuy
