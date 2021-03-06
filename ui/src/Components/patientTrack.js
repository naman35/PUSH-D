import {Link} from 'react-router-dom'
import {Navbar,Container,Nav} from "react-bootstrap"
function PatientTrack(){
    let pth = window.location.href;
    let x = pth.indexOf("=");
    let y = pth.length;
    let k = x+1;
    let str = "";
    while(k<y)
    {
        str = str + pth[k];
        k++;
    }
    console.log(str);
    let pid = parseInt(str);
    // let pid = 28;
    // console.log(id);
    let sec = "034";
    let nums = [];
    let chk = [false,false,false,false,false];
    for(let i=0;i<sec.length;i++){
        nums[i] = parseInt(sec[i]);
    }
    let j =0;
    //below code is to update the chklist according to one stored in DB

    // while(j<nums.length) {
    //     chk[nums[j]] = true;
    //     j++;
    // }
    // j=0;
    // let html = '';
    // let obj = {
    //     0:"Understanding depression",
    //     1:"Enhancing Self Care Motivation",
    //     2:"Activate: Baby Steps to Move ahead",
    //     3:"Manage Excessive Worries",
    //     4:"Learn Self Compassion"
    // }
    fetch("http://localhost:8084/patientDetails/"+pid,{
        method:"GET",
    })
        .then((response) => response.json())
        .then((responseData)=>{
              console.log(responseData);
            document.getElementById("FirstName").value = responseData.username;
            document.getElementById("LastName").value = responseData.username;
            document.getElementById("Address").value = responseData.id;
            document.getElementById("ContactNo").value = responseData.role;
            document.getElementById("age").value = responseData.id;
        })

    // let lst = ["Understanding depression","Enhancing Self Care Motivation","Activate: Baby Steps to Move ahead","Manage Excessive Worries","Learn Self Compassion"];
    // while(j<chk.length){
    //     console.log(chk[j]);
    //     if(chk[j] == true)
    //     {
    //         html = html + '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" onchange="'+handleChange()+'" checked={true} value="'+j+'" ></input>'+lst[j]+'</li>';
    //     }
    //     else
    //     {
    //         html = html + '<li class="list-group-item"><input class="form-check-input me-1" type="checkbox" onchange="'+handleChange()+'" value="'+j+'" ></input>'+lst[j]+'</li>';
    //     }
    //     j++;
    // }

    function handleChange(val)
    {
        chk[val] = !chk[val];
    }

    // function updateList()
    // {
    //     document.getElementById("sectionList").innerHTML = html;
    // }
    function details()
    {
        document.getElementById("detailsTab").style.backgroundColor="white"
        document.getElementById("sectionsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("chatTab").style.backgroundColor="lightsteelblue"
        document.getElementById("details").style.display="block";
        document.getElementById("sections").style.display="none";
        document.getElementById("chat").style.display="none";
    }
    function sections()
    {
        // updateList();
        document.getElementById("sectionsTab").style.backgroundColor="white"
        document.getElementById("detailsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("chatTab").style.backgroundColor="lightsteelblue"
        document.getElementById("details").style.display="none";
        document.getElementById("sections").style.display="block";
        document.getElementById("chat").style.display="none";
    }
    function chat()
    {
        document.getElementById("chatTab").style.backgroundColor="white"
        document.getElementById("sectionsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("detailsTab").style.backgroundColor="lightsteelblue"
        document.getElementById("details").style.display="none";
        document.getElementById("sections").style.display="none";
        document.getElementById("chat").style.display="block";
    }

    function updateSection()
    {
        let res = "";
        for(let i=0;i<chk.length;i++)
        {
            if(chk[i])
            {
                res = res + i.toString();
            }
        }
        console.log(res);
        fetch("http://localhost:8084/skippable/"+pid+"/"+res,{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((responseData)=>{
                console.log(responseData);
            });
    }

    function seeResponse()
    {
        window.location.href = '/response?id='+pid;
        ///change this 23 to pid getting from url
    }

    function seeAnalytics()
    {
        window.location.href = '/analytics?id='+pid;
    }

    function seeActivity()
    {
        window.location.href = '/timeTrack?id='+pid;
    }

    function logout()
    {
        window.location.href = "/login";
    }

    return <>
        <div>
            <div>
                <nav className="navbar" style={{backgroundColor:"gainsboro"}}>
                    <div className="container-fluid">
            <span className="navbar-text">
            Push-D Logo
            </span>
                        <span>
                <button id-type="button" onClick={logout} className="btn btn-success" style={{marginTop:"10px",backgroundColor:"white",color:"black"}}>Logout</button>
            </span>
                    </div>
                </nav>
            </div>
            <div className="card shadow p-3 mb-5 bg-white rounded" style={{margin:"20px",backgroundColor:"white",textAlign:"left"}}>
                <div className="card-header" style={{backgroundColor:"lightsteelblue"}}>
                    <ul className="nav nav-tabs card-header-tabs" >
                        <li className="nav-item" id="detailsTab" onClick={details} style={{backgroundColor:"white"}}>
                            <a className="nav-link" href="#" style={{color:"black"}}>Patient Details</a>
                        </li>
                        <li className="nav-item" id="sectionsTab" onClick={sections}>
                            <a className="nav-link" href="#"  style={{color:"black"}}>Sections skippable</a>
                        </li>
                        <li className="nav-item" id="chatTab"  onClick={chat}>
                            <a className="nav-link" href="#" style={{color:"black"}}>Chat</a>
                        </li>
                    </ul>
                </div>
                <div className="card-body" id="details">
                    <h5 className="card-title">Profile Details</h5>
                    <form className="row" style={{padding:"20px"}}>
                        <div style={{textAlign:"center"}}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYPRLSISP2uoEdGxNPVFrz02gI2KWiJ_VwNA&usqp=CAU" alt="Avatar" style={{borderRadius:"50%"}}></img>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>First Name</label>
                            <input type="text" className="form-control" id="FirstName" disabled={true}>
                            </input>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>Last Name</label>
                            <input type="text" className="form-control" id="LastName" disabled={true}></input>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>Address</label>
                            <input type="text" className="form-control" id="Address" disabled={true}></input>
                        </div>
                        <div style={{marginTop:"4px"}}>
                            <label>Contact No</label>
                            <input type="text" className="form-control" id="ContactNo" disabled={true}></input>
                        </div>
                        <div style={{marginTop:"15px",textAlign:"center"}}>
                            <div className="row">
                                <div className="col-md-4">
                                    <button type="button" id="editBtn" className="btn" onClick={seeAnalytics} style={{marginTop:"10px",backgroundColor:'#1bbd7e',color:"black"}}>Analytics</button>
                                </div>
                                <div className="col-md-4">
                                    <button type="button" id="viewResBtn" className="btn"  style={{marginTop:"10px",backgroundColor:'coral',color:"black"}} onClick={seeResponse}>Responses</button>
                                </div>
                                <div className="col-md-4">
                                    <button type="button" id="viewResBtn" className="btn" onClick={seeActivity} style={{marginTop:"10px",backgroundColor:'lightsteelblue',color:"black"}}>Activity</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="card-body" id="sections" style={{display:"none"}}>
                    <h5 className="card-title">Exercise Performed</h5>
                    <p className="card-text">These are the sections which patient can skip and are not necessary.</p>
                    <ul className="list-group" id="sectionList">
                        <li className="list-group-item"><input className="form-check-input me-1" type="checkbox"
                                                               onChange={()=>handleChange(0)} value="0"></input>Understanding depression
                        </li>
                        <li className="list-group-item"><input className="form-check-input me-1" type="checkbox"
                                                               onChange={()=>handleChange(1)} value="1"></input>Enhancing Self Care Motivation
                        </li>
                        <li className="list-group-item"><input className="form-check-input me-1" type="checkbox"
                                                               onChange={()=>handleChange(2)} value="2"></input>Activate: Baby Steps to Move ahead
                        </li>
                        <li className="list-group-item"><input className="form-check-input me-1" type="checkbox"
                                                               onChange={()=>handleChange(3)} value="3"></input>Manage Excessive Worries
                        </li>
                        <li className="list-group-item"><input className="form-check-input me-1" type="checkbox"
                                                               onChange={()=>handleChange(4)} value="4"></input>Learn Self Compassion
                        </li>
                    </ul>
                    <button type="button" onClick={updateSection} className="btn btn-primary" style={{backgroundColor:'#1bbd7e',marginTop:"2vw"}}>Update</button>
                </div>
                <div className="card-body" id="chat" style={{display:"none"}}>
                    <h5 className="card-title">Chat</h5>
                    <div style={{marginTop:"4px",textAlign:"center"}}>
                        <a href="https://sanphirefrontend.herokuapp.com" target="_blank" id="editBtn" className="btn" style={{marginTop:"10px",backgroundColor:'#1bbd7e',color:"black"}}>Click to Chat</a>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default PatientTrack;