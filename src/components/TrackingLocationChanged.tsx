import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function TrackingLocationChanged() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    function locationChanged() {
      console.log(`locationChanged::` + JSON.stringify(location, null, 2));
    }

    locationChanged();
  }, [location]);

  useLayoutEffect(() => {
    console.log("navigationType", navigationType);
  }, [location]);

  return null;
}
