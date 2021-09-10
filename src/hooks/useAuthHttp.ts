import { useEffect } from "react";
import useSWR from "swr";
import { http } from "../util/http";
import Router from "next/router";

const fetcher = (url: string) => http.get(url).then(res => res.data);

export function useAuthHttp(url: string) {
  const {data, error} = useSWR(url, fetcher);

  useEffect(() => {
    if(error?.response?.status === 401) {
      Router.push('/login');
    }
  }, [error])

  return { data, error };
}