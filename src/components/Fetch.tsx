import { useAuth0 } from '@auth0/auth0-react'
import { useContext } from 'react'
import { Context } from '../Store'
import axios from 'axios'

const eurekaService = 'http://127.0.0.1:8000/http://localhost:8761/eureka'

export default function Fetch() {
  const { getAccessTokenSilently } = useAuth0()
  const domain = `${process.env.REACT_APP_AUTH0_DOMAIN}`
  let apiURL = ''

  const store = useContext(Context)

  // const config: AxiosRequestConfig<any> = {
  //   headers: {'content-type': 'application/json'},
    
  // }

  // const body = JSON.stringify({
  //   instance: {
  //     hostName: 'localhost',
  //     app: 'NOTES-SERVICE',
  //     vipAddress: 'notes-service',
  //     instanceId: 'unique-instance-id',
  //     ipAddr: '0.0.0.0',
  //     status: 'UP',
  //     port: {
  //       $: 8585,
  //       '@enabled': true
  //     },
  //     dataCenterInfo: {
  //       '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
  //       name: 'MyOwn'
  //     }
  //   }
  // })


  const handleClick = async() => {
    await axios.get<any>(`${eurekaService}/apps`)
      .then(response => apiURL=`${response.data.applications.application[0].instance[0].ipAddr}:${response.data.applications.application[0].instance[0].port.$}`)
      .catch(error => console.log('Error: ' + error.message))
    // await axios.post(`${eurekaService}/apps/NOTES-SERVICE`, body, config)
    //   .then(response => console.log(response.config))
    //   .catch(error => console.log('Error: ' + error.message))
    const accessToken = await getAccessTokenSilently({
      audience: `https://${domain}/api/v2/`, 
      scope: 'read:current_user'
    }).catch(error => console.log('Error: ' + error.message))
    const headers = {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    }
    await axios.get<[{id: number, title: string}]>(`http://127.0.0.1:8000/http://${apiURL}/api/v1`, headers)
      .then(response => {store.setState({...Context, text: response.data[0].title})})
      .catch(error => console.log('Error: ' + error.message))
  } 

  return <button onClick={handleClick}>fetch</button>
}
