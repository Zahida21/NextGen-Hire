import React, { useEffect, useState } from 'react'

function BulkDetails() {
    const[fresherslist,setfresherslist]=useState([])

    useEffect(()=>{
        getfreshers();
    },[])

    const getfreshers=async()=>{
        let result=await fetch('http://localhost:5000/freshers')
        result=await result.json()
        setfresherslist(result)
    }
  return (
    <div>
      <h1>Freshers details</h1>
      {
            fresherslist.length>0?fresherslist.map((items)=>
    <div > 

            <h3>{items.applicantDomain}</h3>
            <h3>{items.applicantname}</h3>
            <h4>{items.applicantemailid}</h4>
            <h4>{items.applicantphoneno}</h4>
    </div>
  ):<h1>No candidate listed yet in this domain</h1>
}
<a href='http://localhost:3001/'>Host a Meeting</a>
</div>
)}

export default BulkDetails
