import "../style/style.css";
const WhatWeDo = () => {
  const Todo = [
    {
      id: 1,
      title: "Plan",
      subTitle:
        "we will be your success partner for setup clean plan with nice recommendation from our team with respect to budget and deadline",
    },
    {
      id: 2,
      title: "Design",
      subTitle:
        "nice and Qualified Design team they will keep in touch with partners for desinging and organising the space ",
    },
    { id: 3, title: "Supervision & Execution", subTitle: " we prioritize in-depth studies to  make sure that the execution goes smoothly and as planned with high caring with details" },
    {
      id: 4,
      title: "Maintaince",
      subTitle:
        "We Do all maintaince Type for (A/C,Electicity,Plumbing,lighting)",
    },
    {
      id: 5,
      title: "Handover on Time",
      subTitle:
        "one of the success secrets thats we respect you will get your property in estimated time for any delay we will inform you before 10 days ",
    },
  ];
  return (
    <div>
      <h3 className="sectionHeader" >What We Do</h3>
      <div  className="d-flex flex-wrap p-5  "style={{margin:'0 auto',columnGap:'8px'}}>
        {Todo.map((item) => (
          <div key={item.id} style={{width:'350px',borderRadius:'8px',height:'248px',background:'#212529',color:'white',margin:'32px'}} className="text-center p-3">
            <p style={{fontFamily:'Oswald',fontSize:'28px',color:"#c08541",}}>{item.title}</p>
            <p style={{fontFamily:'lato',fontSize:'16px',}}>{item.subTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
