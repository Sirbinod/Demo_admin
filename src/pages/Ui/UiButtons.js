import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import "./userDetail.scss"

import { Col, Row, Card, CardBody, CardTitle, Container } from "reactstrap"
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiButtons = () => {
  const [radio1, setradio1] = useState(true)
  const [radio2, setradio2] = useState(false)
  const [radio3, setradio3] = useState(false)
  const [drp_link, setdrp_link] = useState(false)

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>User Profile</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs
            maintitle="JobsTrobustech"
            title="User"
            breadcrumbItem="User Profile"
          />

          <Row>
            <Col className=" mx-5">
              <Card className="user-card">
                <CardBody className="p-5">
                  <div className="user-icon">
                    <i className="mdi mdi-36px mdi-account"></i>
                  </div>
                  <div className="user-basic">
                    <span className="user-name">Person Name</span>
                    <p className="user-email">00np10@gmail.com</p>
                  </div>
                  <div className="user-detail">
                    <div className="user-detail-contain d-flex">
                      <div className="user-detail-title">
                        <i className="ti-check-box"></i> <span>Company</span>
                      </div>
                      <div className="user-detail-name">
                        <span>Company</span>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="user-detail-contain d-flex">
                      <div className="user-detail-title">
                        <i className="ti-check-box"></i> <span>Joined</span>
                      </div>
                      <div className="user-detail-name">
                        <span>10/08/2020</span>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="user-detail-contain d-flex">
                      <div className="user-detail-title">
                        <i className="ti-check-box"></i>{" "}
                        <span>Phone Number</span>
                      </div>
                      <div className="user-detail-name">
                        <span>012345678</span>
                      </div>
                    </div>
                    <div className="divider"></div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiButtons
