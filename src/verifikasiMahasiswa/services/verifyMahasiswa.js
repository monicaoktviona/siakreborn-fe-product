import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const getCookie = (name) => {
	const cookies = document.cookie.split("; ");
	const cookie = cookies.find((row) => row.startsWith(`${name}=`));
	return cookie ? cookie.split("=")[1] : null;
  };

const verifyMahasiswa = (data = {}) => {
	let body = data;
	const { getToken } = tokenManager();
	const token = getToken();
	const programStudiId = getCookie("selectedProdi");

	let apiUrl = `${environment.rootApi}/call/mahasiswa/verify`	

	if (programStudiId) {
			apiUrl = `${environment.rootApi}/call/mahasiswa/verify/filter`;
			  }
			body = {
				...data,
				programStudiId: programStudiId,
			}
			console.log(apiUrl)
			console.log(programStudiId)
	
	return axios.post(apiUrl, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default verifyMahasiswa
