import carType from './index.scss';
import router from 'umi/router';
export default function(){
    const toRouter = () =>{
        router.push('/list');
    }
    return(
        <div className={carType.carType}>
            <p>车辆 <span className={carType.prompt}>类型</span> Page</p>
            <p className={carType.torouter} onClick={toRouter}>返回车辆列表页面</p>
        </div>
    )
}