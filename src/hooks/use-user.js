import { useState, useEffect } from "react";
import { checkStatus } from "../components/services/auth";
const useUser = () => {
  const [loading, setLoading] = useState(true);
  const [userStatus, setUserStatus] = useState(false);

  const check = async () => {
    const status = await checkStatus();
    if (status) {
      setUserStatus(status);
    }
    setLoading(false);
  };

  useEffect(() => {
    const asyncCheck = async () => {
      await check();
    };
    asyncCheck();
  }, []);

  return { loading, userStatus };
};

export default useUser;
