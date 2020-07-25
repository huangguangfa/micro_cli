import carList from './index.scss';
import router from 'umi/router';
import { setState } from '../../utils/app-store'
export default function(){
    const toRouter = () =>{
        router.push('/type');
    }
    const sendMes = () =>{
        setState( {
            data:{
                name:'车辆管理员',
                mes:'发送一条车辆消息通知',
                sendUser:'car车辆子应用',
            },
            token:'32131231289634'
        })
    }
    return(
        <div className={carList.carlist}>
            <p>车辆<span className={carList.prompt}>列表</span> Page</p>
            <span className={carList.mes} onClick={sendMes}>跨应用发送消息</span>
            <p className={carList.torouter} onClick={toRouter}>to车辆类型</p>
        </div>
    )
}