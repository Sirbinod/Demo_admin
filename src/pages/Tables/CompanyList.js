import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { Link } from "react-router-dom"

const CompanyList = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Type",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Email",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Phone",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Address",
        field: "address",
        sort: "asc",
        width: 100,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Cedric Kelly",
        position: "Senior Javascript Developer",
        office: "Edinburgh",
        age: "22",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Airi Satou",
        position: "Accountant",
        office: "Tokyo",
        age: "33",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Brielle Williamson",
        position: "Integration Specialist",
        office: "New York",
        age: "61",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Herrod Chandler",
        position: "Sales Assistant",
        office: "San Francisco",
        age: "59",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Rhona Davidson",
        position: "Integration Specialist",
        office: "Tokyo",
        age: "55",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Colleen Hurst",
        position: "Javascript Developer",
        office: "San Francisco",
        age: "39",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Sonya Frost",
        position: "Software Engineer",
        office: "Edinburgh",
        age: "23",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Jena Gaines",
        position: "Office Manager",
        office: "London",
        age: "30",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Quinn Flynn",
        position: "Support Lead",
        office: "Edinburgh",
        age: "22",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
      {
        name: "Charde Marshall",
        position: "Regional Director",
        office: "San Francisco",
        age: "36",
        address: "Samakhusi, Kathmandu",
        action: (
          <Row>
            <Col>
              <Link to="/ui-cards">
                <i className="ti-eye"></i>
              </Link>
            </Col>
            <Col>
              <i className="ti-trash"></i>
            </Col>
            <Col>
              <i className="ti-pencil"></i>
            </Col>
          </Row>
        ),
      },
    ],
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Company List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Job"
            title="Tables"
            breadcrumbItem="Company List"
          />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  {/* <CardTitle className="h4">Default Datatable </CardTitle>
                  <p className="card-title-desc">
                    mdbreact DataTables has most features enabled by default, so
                    all you need to do to use it with your own tables is to call
                    the construction function:{" "}
                    <code>&lt;MDBDataTable /&gt;</code>.
                  </p> */}

                  <MDBDataTable responsive bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CompanyList
