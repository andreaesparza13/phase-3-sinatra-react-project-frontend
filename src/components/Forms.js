import React from 'react'

const Forms = () => {
  return (
    <ArtistForm/>
  )
}

const ArtistForm = () => {
    return (<div className="artist-form table space-y-2">
    <div className="formbuilder-text">
      <label>First name <span className="formbuilder-required">*</span>
      </label>
      <input type="text" className="form-control" aria-required="true" />
    </div>
    <div className="formbuilder-text">
      <label className="formbuilder-text-label">Last name <span className="formbuilder-required">*</span>
      </label>
      <input type="text" className="form-control" aria-required="true" />
    </div>
    <div className="formbuilder-text">
      <label className="formbuilder-text-label">Age <span className="formbuilder-required">*</span>
      </label>
      <input type="text" className="form-control" aria-required="true" />
    </div>
    <div className="formbuilder-text">
      <label className="formbuilder-text-label">City <span className="formbuilder-required">*</span>
      </label>
      <input type="text" className="form-control" aria-required="true" />
    </div>
  </div>)
}

export default Forms