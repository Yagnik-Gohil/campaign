import React, { Fragment } from 'react'
import { ReactComponent as Facebook } from '../icons/Facebook.svg';
import { ReactComponent as YouTube } from '../icons/YouTube.svg';
import { ReactComponent as Google } from '../icons/Google.svg';
import { ReactComponent as LiveNow } from '../icons/LiveNow.svg';
import { ReactComponent as Paused } from '../icons/Paused.svg';
import { ReactComponent as Exhousted } from '../icons/Exhousted.svg';
import { ReactComponent as Edit } from '../icons/edit.svg';
import { ReactComponent as Trash } from '../icons/trash.svg';

function TableRow({ data }) {
    const getIcon = (icon) => {
        if (icon === "Facebook") {
            return <Facebook />
        }
        else if (icon === "YouTube") {
            return <YouTube />
        } else if (icon === "Google") {
            return <Google />
        } else if (icon === "LiveNow") {
            return <LiveNow />
        } else if (icon === "Paused") {
            return <Paused />
        } else if (icon === "Exhousted") {
            return <Exhousted />
        }
    }
    return (
        <Fragment>
            <tr className="table-row">
                <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" />
                    </div>
                </td>
                <td>
                    <label className="switch">
                        <input type="checkbox" defaultChecked={data.onOff}/>
                        <span className="slider round"></span>
                    </label>
                </td>
                <td>
                    <div className='d-flex align-items-center'>
                        <img className="img-responsive rounded table-img" src={`${process.env.PUBLIC_URL}/images/${data.image}`} alt='cake'></img>
                        <span>
                            <h6 className="m-0 fw-bold">{data.title}</h6>
                            <p className="m-0 text-muted">{data.date}</p>
                        </span>
                    </div>
                </td>
                <td>
                    {data.range}
                </td>
                <td>
                    {data.clicks}
                </td>
                <td>
                    {data.price}
                </td>
                <td>
                    {data.location}
                </td>
                <td>
                    {getIcon(data.platform)}
                </td>
                <td>
                    {getIcon(data.status)}
                </td>
                <td>
                    <Edit />&nbsp;&nbsp;&nbsp;<Trash />
                </td>
            </tr>
        </Fragment>
    )
}

export default TableRow