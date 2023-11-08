


const WhyQuickAction = () => {
    const Todo = [
        {
          id: 1,
          title: "extensive experience in successful projects",
          subTitle:
            "experience in  residential and  commercial projects ",
        },
        {
          id: 2,
          title: "Skilled and professional Team",
          subTitle:
            "we are proud about our qualifid team and engineers and about what we did and what we will do ",
        },

        { id: 3,
         title: "Attenstion to details and high commitment", 
        subTitle: "the thing that make us unique thats we  apply the highest quality standards in our work and we consider this as succes key to our company " },
        {
          id: 4,
          title: "strong relationships with partners",
          subTitle:"we guarantee customer satisfaction and exceed expectations",
        },
    
      ];
    return (  

        <div className="d-flex " style={{minHeight:'650px',background:'#212229',width:'98%',margin:'32px auto',borderRadius:'24px'}}>
            <div className="d-flex align-items-center justify-content-center p-5"  style={{fontSize:'48px',color:'white', fontFamily:'oswald',}}> Why <span className="coloredText m-2" style={{color:"#c08541",}}>HighquickAction</span></div>
            <div className="d-flex flex-column text-white bg-dange p-5">
 {
    Todo.map(item =>(
        <div key={item.id} className="m-4 text-start">
            <p style={{fontFamily:'Oswald',fontSize:'24px'}}>  {item.title}</p>
            <p style={{fontFamily:'lato',fontSize:'18px',marginLeft:'16px'}}>{item.subTitle}</p>
            </div>
    ))
 }
            </div>
        </div>
    );
}
 
export default WhyQuickAction;