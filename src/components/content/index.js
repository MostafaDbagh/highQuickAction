import './style.css'

export const Content  = () =>{

return (
    <div>
        <div className="content bg-dark text-white p-5 d-flex  flex-column justify-content-center " style={{minHeight:'760px'}}>
         <h1 className='headerLogo pt-5 pb-3' style={{color:"#c08541",}}>HIGH QUICK ACTION</h1>
         <p  className='headerTitle w-75 mb-3'>Contstruction Company we care about delivering value and Building future in United Arab Emirates</p>
         <div className='d-flex py-3 text-white'>
         <p className='headerServices' >Maintaince servics </p>
         <span className='mx-1' style={{color:"#c08541",}}> | </span>
         <p className='headerServices' > Construction planning and design </p>
         <span  className='mx-1' style={{color:"#c08541",}}>|</span>
         <p className='headerServices' >project management and execution </p>
         </div>
        </div>
    </div>
)
}