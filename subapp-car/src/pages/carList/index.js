import carList from './index.scss';
import router from 'umi/router';
export default function(){
    const toRouter = () =>{
        router.push('/type');
    }
    return(
        <div className={carList.carlist}>
            <p>车辆<span className={carList.prompt}>列表</span> Page</p>
            <p className={carList.torouter} onClick={toRouter}>to车辆类型</p>
        </div>
    )
}