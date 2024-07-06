import { Link } from 'react-router-dom';
import { API_LINK } from '../../utils/api';
import Header from '../Header/Header';
import { apiData } from '../../hooks/useRoute';

export default function Brands() {
    const { result } = apiData(`${API_LINK}`, 'brands');
    return (
        <div className='col-md-9'>
            <Header />
            <table className="table">
                <thead>
                    <tr>
                        <th className="fs-6 col-md-4">Id</th>
                        <th className="fs-6 col-md-4">title</th>
                        <th className="fs-6 col-md-4">createdAt</th>
                        <th className="fs-6 col-md-4">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {result && result.length > 0 ? (
                        <>
                            {result.map((el, index) => {
                                return (
                                    <tr key={index} >
                                        <td className="fs-6 fw-bold">{index + 1}</td>
                                        <td className="fs-6 fw-bold">{el.title}</td>
                                        <td className="fs-6 fw-bold">{el.createdAt.split('T')[0]}</td>
                                        <td className="d-flex justify-content-around align-items-center">
                                            <Link className="fa-solid fa-circle-info fa-xl text-dark" to={el._id}></Link>
                                            <Link className="fa-regular fa-pen-to-square fa-xl text-primary" ></Link>
                                            <Link className="fa-solid fa-trash fa-xl text-danger "></Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </>
                    ) : (
                        null
                    )}
                </tbody>
            </table>
        </div>
    );
}
