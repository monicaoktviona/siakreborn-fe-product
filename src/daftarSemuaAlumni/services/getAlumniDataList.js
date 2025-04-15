import axios from "axios";
import tokenManager from "@/commons/utils/token";
import environment from "@/commons/utils/environment";
import { notifyError } from "@/commons/utils/toaster";
const getCookie = (name) => {
	const cookies = document.cookie.split("; ");
	const cookie = cookies.find((row) => row.startsWith(`${name}=`));
	return cookie ? cookie.split("=")[1] : null;
  };
const getAlumniDataList = (params = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();
	const programStudiId = getCookie("selectedProdi");

	let apiUrl = `${environment.rootApi}/call/alumni/list`
	let paramsGet = Object.assign(params, {token});
	if (programStudiId) {
			apiUrl = `${environment.rootApi}/call/alumni/filter?by=programStudi&programStudiId=${programStudiId}`;
		  }
		console.log(apiUrl)
		console.log(programStudiId)
		
	return axios.get(apiUrl, {
		params: paramsGet,		
		headers: {
			'Authorization': token,
		}
	}).catch((error) => {
		console.error(error);
		notifyError(error);
	})
} 

export default getAlumniDataList
