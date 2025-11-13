import './AppHeader.css'
import logohome from "/img/Logo-spu.png"

const AppHeader = () => {
    return ( 
    <>
    <div>
        <img src={logohome} className="appgeader"/>
        
     <h1 style={{ textAlign: 'center' }}>CSI205 การพัฒนาโปรแกรมส่วนหน้า</h1>
     </div>
    </> 
    );
}
 
export default AppHeader;
//test