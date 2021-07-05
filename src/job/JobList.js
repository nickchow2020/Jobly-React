import React,{useState,useEffect} from "react"
import API from "../api"
import Loading from "../Loading"
import Job from "./Job"
import Search from "../form/Search"
import "./JobList.css"

const JobList = ()=>{

  const [jobs,setJobs] = useState([])

  useEffect(()=>{
    async function getJobs(){
      const res = await API.jobs()
      setJobs(res)
    }
    getJobs()
  },[])

  const updateResult = async (title)=>{
    const result = await API.findJobs({title})
    setJobs(result)
  }

  const handleReset = async ()=>{
    const result = await API.jobs()
    setJobs(result)
  }

  const isJobEmpty = jobs.length === 0

    return (
        <div className="JobList">
          <Search 
            updateResult={updateResult} 
            reset={handleReset}
          />
          <h2>All Jobs List:</h2>
          {
            isJobEmpty ? <Loading /> : <Job dataInfo={jobs}/>
          }
        </div>
    )
}

export default JobList