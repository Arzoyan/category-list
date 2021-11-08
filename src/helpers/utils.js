import 'antd/dist/antd.css';
import { message } from 'antd';

import {API_URL}from './constants';


export const GETData = async (url) => {
   return fetch(`${API_URL}/${url}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => message.error(error.message));
};

export const divideData = (data) => {
  let payload = [];
  for (let i = 0; i < 10; i++) {
    payload.push({
      ...data[i],
      sessions: [
        {
          id: i,
          categoryId: data[i].id,
          title: "test data 02GR011",
        },
        {
          id: new Date().getTime(),
          categoryId: data[i].id,
          title: "test data  02GR011",
        },
      ],
    });
  }
  return payload;
};
