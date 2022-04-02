import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TrackingLocationChanged() {
  const location = useLocation();

  useLayoutEffect(() => {
    function locationChanged() {
      console.log(`locationChanged::` + JSON.stringify(location, null, 2));
    }

    locationChanged();
  }, [location]);

  return null;
}
