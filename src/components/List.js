import '../App.css'
import React from 'react'
import PropTypes from 'prop-types'

function List(props) {
    const {list, chooseUser} = props;
    return(
        <table>
            <tbody>
                {list.map(o => <tr key={o.id}><td onClick={() => chooseUser(o.id)}>{o.name}</td></tr>)}
            </tbody>
        </table>
    )
}

List.propTypes = {
    list: PropTypes.array,
    chooseUser: PropTypes.func
}

export default List