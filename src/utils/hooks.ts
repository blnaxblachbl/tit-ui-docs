import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export const useRouteQuery = () => {
  const { search } = useLocation();
  const urlSearchParams = useMemo(() => new URLSearchParams(search), [search]);
  return Object.fromEntries(urlSearchParams.entries());
};
