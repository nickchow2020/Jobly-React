import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import { Descriptions, Image } from 'antd';
import Loading from "../Loading";
import Job from "../job/Job"
import API from "../api";
import "./CompanyCard.css";

const CompanyCard = ()=>{

  const [company,setCompany] = useState({})

  const {handle} = useParams()

  useEffect(()=>{
    async function getCompany(){
      const res = await API.getCompany(handle)
      setCompany(res)
    }

    getCompany()
  },[handle])

  const isCompanyLoad = Object.entries(company).length === 0

  const hasLogo = company.logoUrl

  const CompanyInfo = 
    <div>
      <div className="infoWrapper">
        <Descriptions title="Company Detail" bordered className="info">
          <Descriptions.Item label="Company Name">{company.name}</Descriptions.Item>
          <Descriptions.Item label="Company Handle">{company.handle}</Descriptions.Item>
          <Descriptions.Item label="Number of Employees">{company.numEmployees}</Descriptions.Item>
          <Descriptions.Item label="Description">{company.description}</Descriptions.Item>
        </Descriptions>
        <Image 
          width={250}
          src={hasLogo ? company.logoUrl : "/logos/404.png"}
          />
      </div>
      <h2 className="jobTitle">Jobs List:</h2>
      <Job dataInfo={company.jobs} />
    </div>

  return (
    <div className="CompanyCard">
        {
          isCompanyLoad ? <Loading /> : CompanyInfo 
        }
    </div>
  )


}

export default CompanyCard