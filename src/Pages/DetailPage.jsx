import React from "react";
import { Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import useApiRequest from "../components/useApiRequest";

const DetailPage = (props) => {
  const location = useLocation();
  const detailInfo = useApiRequest(location.state);

  if (!detailInfo.apiData) {
    // Data is not yet available, you can render a loading spinner or message here
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div>detail Page </div>
      <img src={detailInfo.apiData.Poster} />

      {/* Add buttons */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button variant="primary" size="lg" style={{ marginRight: "10px" }}>
          Add to My Collection
        </Button>
        <Button variant="success" size="lg">
          Movies I Want!
        </Button>
      </div>
    </Container>
  );
};

export default DetailPage;
