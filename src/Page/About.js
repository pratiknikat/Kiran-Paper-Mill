import React from 'react';
import Footer from "../Components/Footer"
const About = () => {
  return (
    <>
    <div style={{marginBottom:"70px"}}>
    <h1 style={{marginTop:"10px"}}>About Us</h1>

      <div style={{alignItems:"center",display:"flex",margin:"auto",backgroundColor:"#B2C8BA",borderRadius:"20px",padding:"15px",width:"80%",marginTop:"10px",marginBottom:"90px",height:"300px"}}>
        <p>This is a simple example of how to use react-router with redux.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',gap:"20px", justifyContent: 'space-between', marginLeft: '50px', marginRight: '50px' }}>

        <img
          src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
          width={400}
          height={300}
          alt="Image 1"
        />
        <img
          src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
          width={400}
          height={300}
          alt="Image 2"
        />
        <img
          src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
          width={400}
          height={300}
          alt="Image 3"
        />

        <img
        src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
        width={400}
        height={300}
        alt="Image 1"
      />
      <img
        src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
        width={400}
        height={300}
        alt="Image 2"
      />
      <img
        src="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS6243_175211709-hig.jpg"
        width={400}
        height={300}
        alt="Image 3"
      />
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default About;
