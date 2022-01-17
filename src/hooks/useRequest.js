import { useState, useEffect } from "react";

export const useRequest = (asyncRequestFunc) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    asyncRequestFunc()
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [asyncRequestFunc]);

  return { data, loading, error };
};
