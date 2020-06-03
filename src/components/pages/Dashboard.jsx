import React from "react";
import MainLayout from "../shared/Layout";
import { PageHeader, Divider, List, Card, Row, Col } from "antd";
import {
  UserOutlined,
  SmileTwoTone,
  TrophyTwoTone,
  CarTwoTone,
  LockTwoTone,
  SecurityScanTwoTone,
  AlertTwoTone,
  SafetyCertificateTwoTone,
  GiftTwoTone,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const gridStyle = {
  width: "33.33%",
  textAlign: "center",
  cursor: "pointer",
};

export default function Dashboard() {
  const history = useHistory();

  return (
    <MainLayout>
      <PageHeader title="Dashboard" />
      <Divider />
      <Card>
        <Card.Grid
          style={gridStyle}
          onClick={() => history.push("/members/view")}
        >
          <SmileTwoTone style={{ fontSize: 30 }} /> <br />
          <h3>Manage Members</h3>
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => history.push("/workers/view")}
        >
          <TrophyTwoTone style={{ fontSize: 30 }} /> <br />
          <h3>Manage Workers</h3>
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => history.push("/drivers/view")}
        >
          <CarTwoTone style={{ fontSize: 30 }} /> <br />
          <h3>Manage Drivers</h3>
        </Card.Grid>
        <Card.Grid
          style={gridStyle}
          onClick={() => history.push("/guards/view")}
        >
          <SafetyCertificateTwoTone style={{ fontSize: 30 }} /> <br />
          <h3>Manage Guards</h3>
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => history.push("/alerts")}>
          <AlertTwoTone style={{ fontSize: 30 }} /> <br />
          <h3>View Alerts</h3>
        </Card.Grid>
        <Card.Grid style={gridStyle} onClick={() => history.push("/services")}>
          <GiftTwoTone style={{ fontSize: 30 }} /> <br />
          <h3>View Services</h3>
        </Card.Grid>
      </Card>
    </MainLayout>
  );
}
