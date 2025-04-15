import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const saveKurikulum = (data = {}) => {
	let body = data;
	const formData = new FormData();
	Object.entries(data).forEach(([key, value ]) => {
		formData.append(key, value);
	});
	body = formData;

	const { getToken } = tokenManager();
	const token = getToken();
	
	return axios.post(`${environment.rootApi}/call/kurikulum/save`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveKurikulum
