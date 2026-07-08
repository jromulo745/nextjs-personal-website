import Navbar from "../../components/navbar";

export default function AboutMePage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center" style={{gap: '20px'}}>
        <div className="backdrop-blur-md border rounded-3xl mb-20 mt-10 ml-10 p-10 max-w-3xl work-photo-section" >
          <h1 className="text-4xl mb-5" style={{textAlign: 'center'}}>Work Photo</h1>
          <img src="/images/photo.png" style={{alignContent: 'center'}} width="283" height="377"></img>
          
          <div className="flex justify-center mt-10">
            <img src="/images/csueb.eb.rg.png" width="145" height="112"></img>
          </div>
        
          <div className="flex justify-center mt-10">
            <img src="/images/acuren-logo-from-site.png" width="145" height="112"></img>
          </div>

          <div className="flex justify-center mt-10">
            <img src="/images/horizontal-alternative-family-services-logo-768x377.jpg" width="145" height="112"></img>
          </div>
        </div>

        <div className="backdrop-blur-md border rounded-3xl mb-20 mt-10 mr-10 p-10 max-w-xl work-history-section">
          <h1 className="text-3xl mb-5" style={{textAlign: 'center', color: '#9B9EAE'}}>About me</h1>
          <p className="mt-5" style={{color: '#6E717A', paddingLeft: '30px', paddingRight: '30px'}}>Hello! My name is Joshua Romulo, a computer science graduate from California State University, East Bay with working knowledge of the following technologies: JavaScript, TypeScript, React Native, NextJS, HTML5, CSS3, Python, Java, Kotlin, C#, Git, SQL, Blazor, and C++. I possess work experience as a full-time Software Engineer and am continuously excited to learn new concepts and techniques. Let's connect!</p>
      
          <h1 className="text-3xl mb-5 mt-7" style={{textAlign: 'center', color: '#9B9EAE'}}>Work Experience</h1>
          
          <h2 style={{textAlign: 'center', marginTop: '30px', fontStyle: 'italic'}}>California State University, East Bay</h2>
          <ul style={{textAlign: 'left', margin: '10px 50px'}}>
            <li style={{listStyleType: 'disc'}}><strong>IT Accessibility Production Student Assistant</strong></li>
            <ul style={{listStyleType: 'circle'}}>
              <li>Processed student requests for physical and electronic course materials and textbooks into Accessible Format using Assistive Technology and OCR software.</li>
              <li>Upheld of an electronic inventory.</li>
              <li>Provided triage services to the ICT process via campus ticketing system (Service Desk).</li>
            </ul>
          </ul>

          <h2 style={{textAlign: 'center', marginTop: '30px', fontStyle: 'italic'}}>Acuren Engineering</h2>
          <ul style={{textAlign: 'left', margin: '10px 50px'}}>
            <li style={{listStyleType: 'disc'}}><strong>IT Helpdesk Analyst</strong></li>
            <ul style={{listStyleType: 'circle'}}>
              <li>Troubleshooted issues related to computer software, hardware, networking, and phone systems and resolve within 
                  established SLA’s.</li>
              <li>Documented technical issues and take ownership of escalating issues to the appropriate resource.</li>
              <li>Ensured security and privacy of networks and computer systems.</li>
              <li>Administrated Azure user accounts throughout the company.</li>            
            </ul>
          </ul>

          <ul style={{textAlign: 'left', margin: '10px 50px'}}>
            <li style={{listStyleType: 'disc'}}><strong>Software Engineer</strong></li>
            <ul style={{listStyleType: 'circle'}}>
              <li>Developed and maintained Windows and web-based applications in an Agile .NET environment.</li>
              <li>Upheld Object-Oriented Programming (OOP) principles and best practices using C# and JavaScript.</li>
              <li>Followed source control best practices using Git and Azure DevOps, fostering collaboration and supporting continuous integration workflows.</li>
              <li>Employed effective communication with product stakeholders and team members.</li>            
            </ul>
          </ul>

          <h2 style={{textAlign: 'center', marginTop: '30px', fontStyle: 'italic'}}>Alternative Family Services</h2>
          <ul style={{textAlign: 'left', margin: '10px 50px'}}>
            <li style={{listStyleType: 'disc'}}><strong>IT Specialist</strong></li>
            <ul style={{listStyleType: 'circle'}}>
               <li>Designed, built, and maintained data analytics pipelines and dashboards across multiple platforms
                   (Periscope/Sisense, Zoho Analytics), utilizing SQL, PowerBI, and an in-house Data Warehouse.</li>
               <li>Administered multiple agency-wide systems, supporting daily operations by managing system configurations, user
                   access, and issue resolution.</li>
               <li>Diagnosed and resolved technical issues with computer software and networks.</li>
               <li>Provided technical assistance to users, answered questions, and guided staff through troubleshooting steps virtually,
                   in-person (as needed), and/or via email and/or training through the agency’s IT service desk.</li>
               <li>Provided training to users on new software, or IT systems, when necessary.</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}