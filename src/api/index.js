import axios from "axios";
import {compareAsc, format} from 'date-fns';
const withCredentials = true;
export const getMedia = async (media,setMedia) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  

  try {
    const response = await axios.get(serverUrl + "api/loadpdf");
    response.data.map((data) => {
      if (format(new Date(), 'yyyy-MM-dd') > data.expireTime) {
        console.log("Deleted", data.name)
        const dataF = {mediaId: data.id, name: data.filename}
        deleteFile(withCredentials, dataF)
      } else {
        setMedia(prevState => [...prevState, data])
      }
    })
    
    const response1 = await axios.get(serverUrl + "api/loadvideos");
    response1.data.map((data) => {
      
      if (format(new  Date(),'yyyy-MM-dd') > data.expireTime) {
        console.log("Deleted", data.name)
        const dataF = {mediaId: data.id, name: data.filename}
        deleteFile(withCredentials, dataF)
      } else {
        setMedia(prevState => [...prevState, data])
      }
      
    })
  } catch (err) {
    console.log(err);
  }
}

export const postPosts = async (files,setFiles) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;


  const baseUrl = serverUrl + "upload/"
  files.map(async file => {
   
    try {
      const config = {headers: {'content-type': 'multipart/form-data'}}
      const formData = new FormData();
    
   
      formData.append('file', file)
      const response = await axios.post(baseUrl, formData, config);
      console.log("response", response)
    } catch (err) {
      console.log(err)
    }
  })
}
 
export const deleteFile = async (withCredentials,data) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  try {
    const res = await axios.delete(serverUrl + "api/delete", {withCredentials, data});
    return res.status
  } catch (err) {console.log(err)}
}

export const updateFile = async ({file}) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  try {
    const res = await axios.put(serverUrl + "update", {file})
    return res.status
  }catch(err){console.log(err)}
}