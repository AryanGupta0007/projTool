import {Overview} from './Dashboard/Overview.js'
import {Metrics} from './Dashboard/Metrics.js'
export const Dashboard = () => {
    return (
        <div className={"dashboard"} style={{
        }}>
            <Overview />
            <Metrics />
        </div>
    )
}