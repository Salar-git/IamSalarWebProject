import {useNavigate } from "react-router-dom";

const NotFound = (props) => {
    let navigate = useNavigate()
    return (<><h2>404</h2>
    <button className='btn btn-sm btn-danger' onClick={()=>{navigate("/")}}> بازگشت به صفحه اصلی</button>
    </>)
}
export default NotFound