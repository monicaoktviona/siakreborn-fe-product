import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const updateKurikulum = (data = {}) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (key === 'sKUrl') {
      if (value instanceof File) {
        formData.append('sKUrl', value);
      }
    } else {
      formData.append(key, value);
    }
  });

  const { getToken } = tokenManager();
  const token = getToken();

  return axios.put(`${environment.rootApi}/call/kurikulum/update`, formData, {
    params: { token },
    headers: {
      'Authorization': token,
    },
  });
};

export default updateKurikulum;
