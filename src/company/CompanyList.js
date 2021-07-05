import React,{useState,useEffect} from "react"
import API from "../api"
import Loading from "../Loading"
import Company from "./Company"
import {v4 as uuid} from "uuid"
import Search from "../form/Search"
import "./CompanyList.css"

const CompanyList = ()=>{

    const [companies,setCompanies] = useState([])

    useEffect(()=>{
      async function getAllCompany(){
        const companies = await API.Companies()
        setCompanies(companies)
      }

      getAllCompany()
    },[])

    const isEmpty = companies.length === 0;

    const Comapny = companies.map(company => <Company key={uuid()} data={company}/>)

    const updateResult = async (handle)=>{
      const result = await API.findCompanies({name:handle})
      setCompanies(result)
    }

    const resetCompanies = async ()=>{
        const companies = await API.Companies()
        setCompanies(companies)
    }
    
    return ( 
      <div className="companyList">
        <Search 
        updateResult={updateResult} 
        reset={resetCompanies}/>
        {
          isEmpty 
          ? <Loading /> 
          : Comapny
        }
      </div>
    )
}


export default CompanyList