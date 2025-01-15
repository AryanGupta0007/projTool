import {useContext} from 'react'
import {Card} from '../../components/Card.js'
import {GetContext} from '../../contexts/GetContext.js'
export const Overview = () => {
    const {tasks, projects, members} = useContext(GetContext)
    return (
        <>
            <div className={"flex overview"}>
                {/*<Card title={"Projects"} desc={"20"}/>*/}
                <Card title={"Projects"} desc={projects.length || 0}/>
                <Card title={"Tasks"} desc={tasks.length || 0}/>
                <Card title={"Members"} desc={members.length || 0}/>
            </div>
        </>
    )
}