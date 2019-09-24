import React from 'react';
import '../stylesheets/SpecieFilter.scss'

const SpecieFilter = props => {
    const { info, actionStatus } = props;
    const handleChangeStatus = (event) => {
        actionStatus(event.target.value)
    }

    const arrayStatus = info.map((item, index) => {
        return (
            <div className="statusBox" key={index}>
                <label className="statusInput" htmlFor="statusInput">{item}</label>
                <input id="statusInput" className="statusInput" type="checkbox" value={item} onChange={handleChangeStatus}></input>
            </div>
        )
    })
    // console.log(info)
    // console.log(actionStatus)

    return (
        <div className="statusContainer">{arrayStatus}</div>
    )
}

export default SpecieFilter;