import axios from "axios";

interface ApiResponse {
  message: string;
  data: string;
}

export async function fetchJobs(
  page: number,
  query: string
): Promise<ApiResponse> {
  return await axios.get(
    `https://search.bossjob.com/api/v1/search/job_filter?size=12&query=${query}&page=${page}`
  );
}
