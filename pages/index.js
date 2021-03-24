import { useContext } from "react";
import { Row, Col } from "reactstrap";
import { ThemeColors } from "@/utils/context/ThemeColors";
import CompanyTable from "@/pages/CompanyTable";
import Earnings from "@/components/ui-elements/cards/analytics/Earnings";
import CardMedal from "@/components/ui-elements/cards/advance/CardMedal";
import CardMeetup from "@/components/ui-elements/cards/advance/CardMeetup";
import StatsCard from "@/components/ui-elements/cards/statistics/StatsCard";
import GoalOverview from "@/components/ui-elements/cards/analytics/GoalOverview";
import RevenueReport from "@/components/ui-elements/cards/analytics/RevenueReport";
import OrdersBarChart from "@/components/ui-elements/cards/statistics/OrdersBarChart";
import ProfitLineChart from "@/components/ui-elements/cards/statistics/ProfitLineChart";
import CardTransactions from "@/components/ui-elements/cards/advance/CardTransactions";
import CardBrowserStates from "@/components/ui-elements/cards/advance/CardBrowserState";

const EcommerceDashboard = () => {
  // const { colors } = useContext(ThemeColors);
  // const trackBgColor = "#e9ecef";

  const colors = {
    primary: "#7367f0",
    secondary: "#82868b",
    success: "#28c76f",
    danger: "#ea5455",
    warning: "#ff9f43",
    info: "#00cfe8",
    dark: "#607d8b",
    trackBgColor: "#e9ecef",
  };

  return (
    <div className="m-2" id="dashboard-ecommerce">
      <Row className="match-height">
        <Col xl="4" md="6" xs="12">
          <CardMedal />
        </Col>
        <Col xl="8" md="6" xs="12">
          <StatsCard cols={{ xl: "3", sm: "6" }} />
        </Col>
      </Row>
      <Row className="match-height">
        <Col lg="4" md="12">
          <Row className="match-height">
            <Col lg="6" md="3" xs="6">
              <OrdersBarChart warning={colors.warning} />
            </Col>
            <Col lg="6" md="3" xs="6">
              <ProfitLineChart info={colors.info} />
            </Col>
            <Col lg="12" md="6" xs="12">
              <Earnings success={colors.success} />
            </Col>
          </Row>
        </Col>
        <Col lg="8" md="12">
          <RevenueReport primary={colors.primary} warning={colors.warning} />
        </Col>
      </Row>
      <Row className="match-height">
      <Col lg='8' xs='12'>
          <CompanyTable />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardMeetup />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardBrowserStates />
        </Col>
        <Col lg="4" md="6" xs="12">
          <GoalOverview success={colors.success} />
        </Col>
        <Col lg="4" md="6" xs="12">
          <CardTransactions />
        </Col>
      </Row>
    </div>
  );
};

export default EcommerceDashboard;
