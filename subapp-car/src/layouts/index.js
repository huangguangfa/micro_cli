import layYou from './index.scss'
function BasicLayout(props) {
    return (
        <div className={layYou.car}>
            <p className={layYou.sysTitle}>react的车辆系统管理</p>
            {props.children}
        </div>
    );
}

export default BasicLayout;
