import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import spinnerGif from '../spinner.gif'

function Details(props) {
    const {info} = props;
    const id = info? info.id : null;
    const [details, setDetails] = useState();
    const [spinner, setSpinner] = useState(false);
    
    useEffect(() => {
        //загрузка информации о пользователе
        if (info) {
            setSpinner(true);
            let getInfoData = async () => {
                try {
                    const response = await fetch(`${process.env.REACT_APP_DETAILS_URL}${info.id}.json`);
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    const resultList = await response.json();
                    setDetails(resultList);
                } catch (e) {
                    console.error(e);
                } finally {
                        setSpinner(false);
                }
            }
            getInfoData(); 
        }
        return
        // eslint-disable-next-line
    }, [id])

    if (details) {
        return(
            <table>
                <tbody>
                <tr>
                    <td> 
                        <img src={details.avatar} alt=""/> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>{details.name}</h1>
                    </td>
                </tr>
                <tr>
                    <td>
                        City: {details.details.city}
                    </td>
                </tr>
                <tr>
                    <td>
                        Company: {details.details.company}
                    </td>
                </tr>
                <tr>
                    <td>
                        Position: {details.details.position}
                    </td>
                </tr>
                </tbody>
            </table>
        )
    } else if (spinner) {
        return (
        <table>
            <tbody>
                <tr>
                    <td> 
                        <img src={spinnerGif} alt=""/>
                    </td>
                </tr>
            </tbody>
        </table>)
    } else {
        return null
    }
}

Details.propTypes = {
    info: PropTypes.object
}
export default Details