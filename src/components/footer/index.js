import "./style.css";
import logo from '../../images/logo.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import envelop from '../../images/envelop.svg'
import linkedin from '../../images/linkedin.svg'
import whatsapp from '../../images/whatsapp.svg'
const Footer = () => {
  return (
    <div className="bg-dark p-5" style={{width:'98%',margin:'32px auto 0',borderRadius:'24px'}}>
      <div className="d-flex justify-content-between align-items-center ">

        <div className="socialMedia   px-5 pt-5" style={{background:'#f8f9fa',borderRadius:'4px',height:'100%'}}>
          <img src={logo} alt="highquickAction" width='260' height='65' />
             <div className="socialMediaLinks px-3 pt-4 text-center" style={{color:"black",fontFamily:'oswald',fontSize:'18px'}}> 
             <p>Follow <span style={{color:'#c08541'}}>Us:</span> </p>
             <div>
                <ul className="d-flex p-0 justify-content-center m-0">
                    <li style={{'listStyle':'none'}}><img src={instagram}  alt="social-medai"/></li>
                    <li><img src={whatsapp} width='40' height='40'  alt="social-medai"/></li>
                    <li><img src={facebook} width='40' height='40'  alt="social-medai"/></li>
                    <li><img src={envelop} width='40' height='40'  alt="social-medai"/></li>


                </ul>
             </div>
             <p className="my-5 text-center" style={{fontFamily:'oswald',fontSize:'22px',color:'#c08541',margin:'0'}}>Consider it Done</p>
             </div>
             </div>
        <div className="form d-flex flex-column px-5" style={{gap:'12px'}} >
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter you Phone "
          />
          <textarea
            id="message"
            name="message"
            placeholder=" Enter your Message "
          />
          <button type="submit" style={{background:"#c08541",borderRadius:'8px',fontFamily:'lato'}}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
