import React,{useState} from "react"
import { Input } from 'antd';


import "./Search.css"

const SearchInput = ({updateResult,reset})=>{
  const { Search } = Input;

  const [value,setValue] = useState("")

  const handleChange = (e)=>{
    setValue(e.target.value)
  }

  const handleSearch  = ()=>{
    if(value === ""){
      reset()
    }else{
      updateResult(value)
    }
  }

  return (
    <div className="searchInput">
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onChange={handleChange}
        onSearch={handleSearch}
      /> 
    </div>
  )
}

export default SearchInput


