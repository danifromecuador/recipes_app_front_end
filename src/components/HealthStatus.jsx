import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHealthStatus } from "../redux/slices/healthSlice";

export const HealthStatus = () => {
  const dispatch = useDispatch();
  const healthStatus = useSelector((state) => state.health.status);

  useEffect(() => {
    dispatch(fetchHealthStatus());
  }, [dispatch]);

  return (
    <div>
      <div>Health Status: {healthStatus}</div>
    </div>
  );
}

// export default HealthStatus;