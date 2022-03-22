import './Daily1.scss'
// get redux
import { useDispatch, useSelector } from 'react-redux'
import { rootListType } from '../../ReduxManager/ReduxMain'
// mui components
import ListIcon from '@mui/material/Icon/';
import { Avatar, CircularProgress,  } from '@mui/material/'
import { DragHandleOutlined, LocationOn, Person } from '@material-ui/icons';
import { Button } from '@material-ui/core';
// hooks
import React, { useEffect, useState, useReducer } from 'react'
import useFetch, { fetchedDataType } from '../../Hooks/useFetch';
export default function Daily1() {

  type dataReducerType = {imgSrc: string | null,userLocation: string | null,userUrl: string | null,}
  const [dataReducer , dispatch] = useReducer((state: any,action: {type: string, payload:any }) => {
    switch(action.type){
      case 'ADD_DATA':
        return{
          ...state,
          ...action.payload.data,
        }
      default:
        return state;
    }
  }, {
    imgSrc: null,
    userLocation: null,
    userUrl: null,
  })
  const [githubUserName, setGithubUserName] = useState<string>('Sina-Ebadollahi');
    const currentTheme:string = useSelector((state: rootListType) => state.themeReducer); 
    const { fetchFunction, isPending } = useFetch();
    let fetchData: Promise<any>;
    useEffect(() => {
      fetchData = fetchFunction(`https://api.github.com/users/${githubUserName}`, 'GET')
      fetchData.then((f) => {
        dispatch({type: 'ADD_DATA', payload: f})
        console.log(dataReducer);
        
      })
    },[githubUserName])
    
  return (
    <section className='Daily1-section'>
      {isPending && 
      <div className="main-wrapper">
        <CircularProgress sx={{width: 100, heigth: 100}} />
      </div>}
      {!isPending && 
      <div className="main-wrapper">
        <div className="content-containers content-containers1">
          <DragHandleOutlined onClick={(e) => window.open(`https://github.com/${githubUserName}?tab=repositories`,'_blank')} />
        </div>
        <div className="content-containers content-containers2">
          <div className="profile-image-container">
          {dataReducer.avatar_url && <Avatar alt={`${githubUserName} Profile Image`} src={dataReducer.avatar_url} sx={{width: 80, height: 80}}  />}
          </div>
        </div>
        <div id='content-containers-3rd'  className="content-containers content-containers3">
          <div className="location-content-container">
            <div>
              <Person />
              {dataReducer.name && <h2>{dataReducer.name}</h2>}
              </div>
            <div><LocationOn  />
            {dataReducer.location && <h5>{dataReducer.location}, Iran</h5>}</div>
          </div>
        </div>
        <div className="content-containers content-containers4">
          <Button variant='contained'  onClick={(e) => {
              window.open(`https://www.github.com/${githubUserName}`, '_blank')
          }}>
            View Content
          </Button>
        </div>
      </div>}
    </section>
  )
}
