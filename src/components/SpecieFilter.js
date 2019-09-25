import React from 'react';
import '../stylesheets/SpecieFilter.scss'

const SpecieFilter = props => {
    const { info, actionStatus } = props;

    const characters = info.characters;
    let statusArray = [];
    const arrayStatus = characters.map(item => {
        if (statusArray.includes(item.status) === false) {
            statusArray.push(item.status)
        }
    });

    const handleClick = (event) => {
        const statusSelected = event.target.value;
        return actionStatus(statusSelected)
    }


    const paintStatus = statusArray.map((item, i) => {
        return (
            <div className="statusBox" key={i}>
                <label className="statusInput" htmlFor="statusInput">{item}</label>
                <input id="statusInput" onChange={handleClick} className="statusInput" type="checkbox" value={item}></input>
            </div>
        )
    })
    return (
        <div className="statusContainer">{paintStatus}</div>
    )
}

export default SpecieFilter;




// let statusCharacter = [];
    // const filterStatus = info.characters.map(character => {
    //     if (!status.includes(character.status)) {
    //         statusCharacter.push(character.status)
    //     }
    // });
    // this.setState({
    //     statusquery: statusCharacter
    // }, this.saveData
    // )
    // console.log(status)


    // const handleChangeStatus = (event) => {
    //     actionStatus(event.target.value)
    // }
