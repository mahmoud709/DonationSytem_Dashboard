import { useParams } from 'react-router-dom'
import { API_LINK } from '../../utils/api';
import { apiSingleItem } from '../../hooks/useRoute';

export default function BrandInfo() {
    const { id } = useParams();
    const { data } = apiSingleItem(`${API_LINK}`, 'brands', id);
    return (
        <div className='col-md-9'>
            <div className='row pt-5 justify-content-center align-items-start'>
                {
                    (data) ?
                        <>
                            <div className="col-md-4 mx-2">
                                <img src={data.image.url} className='w-100' alt='cover' />
                            </div>
                            <div className="col-md-6" >
                                <div className="info px-2">
                                    <p className='lead mt-0'>{data.title} information</p>
                                    <h4>{data.info}</h4>
                                </div>
                            </div>
                        </>
                        : <div className='d-flex h-100vh justify-content-center align-content-center'>
                            <i className="fa-solid fa-spinner spin"></i>
                        </div>
                }
            </div>
        </div>
    )
}
