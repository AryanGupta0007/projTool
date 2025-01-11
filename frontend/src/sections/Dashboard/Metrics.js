import {MetricTable} from '../../components/MetricTable.js'
import {MetricChart} from '../../components/MetricChart.js'
export const Metrics = () => {
    return (
        <>

            <div className="metrics flex">
                <MetricTable />
                <MetricChart />

            </div>
        </>
    )
}