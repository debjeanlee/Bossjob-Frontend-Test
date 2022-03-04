import axios from "axios";

interface ApiResponse {
  message: string;
  data: string;
}

export async function fetchJobs(
  page: number,
  query: string
): Promise<ApiResponse> {
  const queryPrefix = "&query=";
  let queryStr: string = `${queryPrefix}${query}`;
  if (query === "") {
    queryStr = "";
  }
  return await axios.get(
    `https://search.bossjob.com/api/v1/search/job_filter?size=12${queryStr}&page=${page}`
  );
}
