import React from 'react'

const CreateDispute = () => {
  return (
    <form>

    <div className="input-div">
        <label className="text-darker fs-14">Categories</label>
        <div className="input-container">
            <select 
                className="input select" 
                type="text" 
                name="orgType"
                required
            >
                <option>Select Dispute Category</option>
                
            </select>
        </div>
    </div>

    <div className="input-div mt-20">
        <label className="text-darker fs-14">Dispute Description</label>
        <div className="input-container">
            <textarea 
                className="input textarea" 
                type="text-area" 
                name="orgName"
                required
            ></textarea>
        </div>
    </div>
    </form>
  )
}

export default CreateDispute