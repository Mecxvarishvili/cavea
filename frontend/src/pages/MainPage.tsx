import React, { useEffect, useState } from 'react';
import ItemsTable from '../components/table/ItemsTable';
import { Link, useLocation } from 'react-router-dom';
import path from '../serialize/pathnames';
import { Button } from 'react-bootstrap';
import { api } from '../components/api';
import Loader from '../components/Loader';
import { ResponseDataType } from '../serialize/types';
import SelectContainer from '../components/SelectContainer';
import { locationOptions, sortOptions } from '../serialize/variables';
import PagePagination from '../components/PagePagination';
import pathname from '../serialize/pathnames';

const MainPage = () => {
    const [ data, setData ] = useState<ResponseDataType>()
    const [ isLoading, setIsLoading ] = useState<boolean>(true)
    const [ toggle, setToggle ] = useState<boolean>(false)
    
    const location = useLocation()

    useEffect(() => {
        api.getInventories(location.search)
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(console.error)
    }, [location.search, toggle])
    console.log('main')
    
    return (
        <Loader isLoading={isLoading} >
             {data && data.results.length ?
             <div className="container my-4" >
                <Button className="my-4" >
                    <Link className='text-white text-decoration-none' to={path.ADD_PAGE} >ინვენტარის დამატება</Link>
                </Button>
                <div className="d-sm-flex" >
                    <SelectContainer className='my-4 me-sm-5' id="sortId" label="სორტირება:" options={sortOptions} def="default" />
                    <SelectContainer className='my-4 ' id="locationId" label="ადგილმდებარეობა:"  options={locationOptions} def="ყველა" />
                </div>
                {data && <ItemsTable setToggle={setToggle} data={data.results} />}
                <div className="d-sm-flex justify-content-between">
                    <PagePagination currentPage={data.currentPage} totalPage={data.totalPage} />
                    <div className="fw-bold" >ჯამური რაოდენობა: {data.totalInventories}</div>
                </div>
            </div>
            : <div className="text-center my-5">
                <div className="my-4 pt-5 fs-5" >ინვენტარი ვერ მოიძებნა</div>
                <Link to={pathname.HOME_PAGE}>
                    <Button>ფილტრის გასუფთავება</Button>
                </Link>
            </div>}
        </Loader>
    );
};

export default MainPage;