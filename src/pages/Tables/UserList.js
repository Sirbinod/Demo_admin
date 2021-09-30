import React from "react"
import MetaTags from "react-meta-tags"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, buttonsubtitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import "./datatables.scss"
import { Link } from "react-router-dom"

const UserList = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Start Date",
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
        label: "Company",
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
        position: "10/08/2021",
        office: "00np10@gmail.com",
        age: "0123456789",
        address: "Lightweb Group",
        action: (
          <Row>
            <Col>
              <Link to="/ui-buttons">
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
          <title>User List</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs
            maintitle="Jobstrobstech"
            title="User "
            breadcrumbItem="User List"
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

export default UserList
