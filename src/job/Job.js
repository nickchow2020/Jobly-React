import React,{useContext,useEffect} from "react";
import { Table,Button} from 'antd';
import {v4 as uuid} from "uuid";
import UserContext from "../context/userContext";
import "./Job.css";

const Job = ({dataInfo})=>{

  const {currentUser,applyJob} = useContext(UserContext)

  const columns = [
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },

    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },

    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },

    {
      title: 'Equity',
      dataIndex: 'equity',
      key: 'equity',
    },
    
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'isApply',
    },
  ];

  const jobApplication = currentUser.applications

  const data = dataInfo.map(job => {

      const isInclude = jobApplication.includes(job.id)

      return{
        key:uuid(),
        title:job.title,
        company:job.companyName || "N/A",
        salary:job.salary,
        equity:job.equity,
        isApply:isInclude ? <Button type="primary" danger>Applied</Button> : <Button type="primary" onClick={()=>applyJob(job.id)}>Apply</Button>
      }
  })

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default Job
