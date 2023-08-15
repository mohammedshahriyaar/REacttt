import React from 'react';
import './Section.css';


const Section = () => {
  return (
    <section className="section mt-4">

        <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-3">
            < h4 style={{ marginBottom: '0' }}>List</h4>
            <button className="btn btn-primary">Create New</button>
        </div>
        <div className="blue-text" style={{ marginTop: '-10px' ,marginLeft:'25px'}}>T-Wind / UI Kit / <span style={{ color: 'blue' }}>Lists</span></div>

        <div className="row">
          <div className="col-md-6 my-1">
            <div className="card cardOutLine">
              <div className="heading">
              <h4>List</h4>
              </div>
              <hr/>
              <div className="card-body">
                <ul>
                  <li>Cras justo odio</li>
                  <li>Dapibus ac facilis in</li>
                  <li>Morbi leo risus</li>
                  <li className="blurred">Disabled</li>  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-1">
            <div className="card cardOutLine">
              <div className="heading">
              <h4>List Unstyle</h4>
              </div>
              
              <hr/>
              <div className="dashed-line"></div> 
              <div className="card-body">
                <ul className='stylelist'>
                  <li>Cras justo odio</li>
                  <li>Dapibus ac facilis in</li>
                  <li>Morbi leo risus</li>
                  <li className="blurred">Disabled</li> 
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="row mt-4 my-1">
          <div className="col-md-6">
          <div className="card cardOutLine">
              <div className="heading">
              <h4>Ordered List</h4>
              </div>
              
              <hr/>
              <div className="card-body">
                <ol >
                  <li>Cras justo odio</li>
                  <li>Dapibus ac facilis in</li>
                  <li>Morbi leo risus</li>
                  <li className="blurred">Disabled</li>  
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-6  my-1">
          <div className="card cardOutLine">
              <div className="heading">
              <h4>List With Icon</h4>
              </div>
              
              <hr/>
              <div className="card-body "  style={{marginTop:'-25px' }}>
              <ul className='noneType '>
              <li><span style={{ color: 'blue', fontSize: '24px',marginLeft:'-35px' }} className="bi bi-check"></span>Cras justo odio</li>
              <li><span style={{ color: 'blue', fontSize: '24px',marginLeft:'-35px' }} className="bi bi-check"></span>Dapibus ac facilis in</li>
              <li><span style={{ color: 'blue', fontSize: '24px',marginLeft:'-35px' }} className="bi bi-check"></span>Morbi leo risus</li>
              <li><span style={{ color: 'blue', fontSize: '24px',marginLeft:'-35px' }} className="bi bi-check"></span>Disabled</li>

                 {/*short cut aa*/}
                {/* <li><span class="fa-li"><i class="fa-solid fa-check-square"></i></span>Item1</li>
                <li><span class="fa-li"><i class="fa-solid fa-spinner fa-pulse"></i></span>replace bullets</li>
                <li><span class="fa-li"><i class="fa-regular fa-square"></i></span>replace bullets</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="row mt-4 my-1">
          <div className="col-md-6">
          <div className="card cardOutLine" style={{ height: '100%' }}>
              <div className="heading">
              <h4>List Link</h4>
              </div>
              
              <hr/>
              <div className="card-body">
                <ul className='noneType' id='rightshift'>
                  <li id='rightshiftli'>Cras justo odio</li>
                  <li id='rightshiftli'>Dapibus ac facilis in</li>
                  <li id='rightshiftli'>Morbi leo risus</li>
                  <li className="blurred" id='rightshiftli'>Disabled</li>  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-1">
          <div className="card cardOutLine" style={{ height: '100%' }}>
              <div className="heading">
              <h4>List With Label</h4>
              </div>
              
              <hr/>
              <div className="card-body" >

                <div className="BoxItem my-2" style={{display:"flow-root",flexDirection:"row",
                flexWrap:"no-wrap",}} >
                <div className="listItems" style={{float:"left"}}>
                <li id='rightshiftli'>Cras justo odio</li>
                </div>
                <div className="listItems " style={{backgroundColor:"blue",borderRadius:"5px",float:"right",color:"white",padding:"4px"}}>
                       Designer
                </div>
                </div>

                <div className="BoxItem my-2" style={{display:"flow-root",flexDirection:"row",
                flexWrap:"no-wrap",}} >
                <div className="listItems" style={{float:"left"}}>
                <li id='rightshiftli'>Dapibus ac facilis in</li>
                </div>
                <div className="listItems" style={{backgroundColor:"blue",borderRadius:"5px",float:"right",color:"white",padding:"5px"}}>
                       Designer
                </div>
                </div>


                <div className="BoxItem my-2" style={{display:"flow-root",flexDirection:"row",
                flexWrap:"no-wrap",}} >
                <div className="listItems" style={{float:"left"}}>
                <li id='rightshiftli'>Morbi leo risus</li>
                </div>
                <div className="listItems" style={{backgroundColor:"blue",borderRadius:"5px",float:"right",color:"white",padding:"5px"}}>
                       Designer
                </div>
                </div>

                <div className="BoxItem my-2" style={{display:"flow-root",flexDirection:"row",
                flexWrap:"no-wrap",}} >
                <div className="listItems" style={{float:"left"}}>
                <li id='rightshiftli'>Disabled</li>
                </div>
                {/* <div className="listItems" style={{backgroundColor:"blue",borderRadius:"5px",float:"right",color:"white",padding:"5px"}}>
                       Designer
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
