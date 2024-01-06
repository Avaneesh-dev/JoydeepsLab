import React from 'react'
import "./Main.css"
import Joydeep from './joydeep.jpeg'
function AlumniComponent() {
  const phdMembers = [{name:"Debarati Nandi", research:"Agricultural Biotechnology", description: "not uploaded", src:'debarati.jpg'},{name:"Hena Gain", research:"Agricultural Biotechnology", description: "not uploaded", src:'hena.jpg'},{name:"Sreya Ghosal", research:"Plant Molecular Biology", description: "not uploaded", src:'sreya.jpg'},{name:"Ankita Chakraborty", research:"Stress Physiology in Plants", description: "not uploaded", src:'ankita.png'},{name:"Shivani", research:"Stress Physiology in Plants", description: "not uploaded", src:'shivani.jpg'}];
  const pgMembers=[{name:"Avaneesh Srivastava",research:"Machine Learning in Crop Science", src:"avaneesh_2.jpg"},{name:"Pallavi Agrawal",research:"Machine Learning in Crop Science", src:'pallavi.jpg'},{name:"Mansi Gupta", research:"Machine Learning in Crop Science",src:'mansi.jpeg'},{name:"Swarnali Bharracharyya",research:"Machine Learning in Crop Science", src:'swarnali.jpg'},{name:"Akhila Yallappa Olekar",research:"Machine Learning in Crop Science", src:'akhila.jpg'}]

  const phdMember = phdMembers.map((member)=> {
    return(
      <div className="text-end col-sm-6 col-md-4 row">
        <div className="text-end col-6">          
          <p className='text-decoration-underline h3'>{member.name}</p>
          <p className='h6 text-muted'>Area of Research:<br />{member.research}</p>
          <p className='lead d-none d-sm-block'>{member.description}</p>
        </div>
        <div className='col-6'>
          <img className="img-fluid rounded img-thumbnail" src={member.src} />
        </div>
      </div>
    );
  })
  const pgMember = pgMembers.map((member)=> {
    return(
      <div className="text-end col-sm-6 col-md-4 row">
        <div className="text-end col-6">          
          <p className='text-decoration-underline h3'>{member.name}</p>
          <p className='h6 text-muted'>Area of Research:<br />{member.research}</p>
        </div>
        <div className='col-6'>
          <img className="img-fluid rounded img-thumbnail" src={member.src} />
        </div>
      </div>
    );
  })
  return (
    <div className="my-10 teams">
      <div className="header">
        <header className="display-5 p-5">ALUMNI</header>
      </div>
      <div className='row'>
        <p className='h2 fw-bold'>DOCTORAL FELLOWS</p>
        {phdMember}        
      </div>
      <div className='row'>
        <p className='h2 fw-bold'>M.TECH RESEARCH FELLOWS</p>
        {pgMember}        
      </div>
      <div className='row'>
        <p className='h2 fw-bold'>M.S. RESEARCH FELLOWS</p>
        <div className="text-end col-sm-6 col-md-4 row">
        <div className="text-end col-6">          
          <p className='text-decoration-underline h3'>Sophia Ofosuhemaa Duodu</p>
          <p className='h6 text-muted'>Area of Research:<br />Agricultural Biotechnology</p>
        </div>
        <div className='col-6'>
          <img className="img-fluid rounded img-thumbnail" src={Joydeep}/>
        </div>
      </div>      
      </div>
    </div>
  )
}

export default AlumniComponent