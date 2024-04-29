import { IpProject } from "@/app/projects/components/form";
import axios from './axiosConfig';

export const saveProject = async (project: IpProject) => {
  const { data: response } = await axios.post<IpProject>('/ip-project', project);
  return response;
}