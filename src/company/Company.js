import React from 'react';
import { Descriptions,Image } from 'antd';
import {Link} from "react-router-dom"
import "./Company.css"

const Company = ({data})=>{

    const hasLogo = data.logoUrl;

    return (
      <Link to={`/companies/${data.handle}`} className="imageWrapper">
        <Descriptions title="Company Info" className="companyInfo">
          <Descriptions.Item label="Company Name">{data.name}</Descriptions.Item>
          <Descriptions.Item label="Company Handle">{data.handle}</Descriptions.Item>
          <Descriptions.Item label="Number of Employees">{data.numEmployees}</Descriptions.Item>
          <Descriptions.Item label="Description">
            {data.description}
          </Descriptions.Item>
        </Descriptions>
        <Image 
        width={150}
        src={hasLogo ? data.logoUrl : "/logos/404.png"}
        />
      </Link>
    )
}

export default Company;

