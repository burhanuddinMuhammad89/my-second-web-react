import axios from "axios";

// GET LIST OF EROS
export async function getErosData(genre) {
  const headers = {
    Authorization:
      "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MyIsImlhdCI6MTY3ODExMDIwNywiZXhwIjoxNjc4MTI4MjA3fQ.T7_ign33bbWcryUzSRtBDQlPAx6qqQ557r29wh8sgeell3E_MQUtZRxGkqPWbPXRGExjNe1D9J0Rk-PNRbO3BQ",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  };
  const result = await axios.get("http://localhost:8080/api/ero/data-list", { headers });
  return result;
}
