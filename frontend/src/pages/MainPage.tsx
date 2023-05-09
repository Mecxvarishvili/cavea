import React, { useEffect, useState } from 'react';
import ItemsTable from '../components/table/ItemsTable';
import { Link } from 'react-router-dom';
import path from '../serialize/pathnames';
import { Button } from 'react-bootstrap';
import { api } from '../components/api';
import Loader from '../components/Loader';
import { ResponseDataType } from '../serialize/types';
import SelectContainer from '../components/SelectContainer';
import { locationOptions, sortOptions } from '../serialize/variables';

const MainPage = () => {
    const [ data, setData ] = useState<ResponseDataType>()
    const [ isLoading, setIsLoading ] = useState<boolean>(false)
    useEffect(() => {
        api.getInventories()
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(console.error)
    }, [])
    console.log('main')
    
    return (
        <Loader isLoading={isLoading} >
            <div className="container" >
                <Button>
                    <Link to={path.ADD_PAGE} >დამატება</Link>
                </Button>
                <div className="d-flex" >
                    <SelectContainer id="sortId" label="სორტირება:" options={sortOptions} def="default" />
                    <SelectContainer id="locationId" label="ადგილმდებარეობა:"  options={locationOptions} def="ყველა" />
                </div>
                {data && <ItemsTable data={data.results} />}
            </div>
        </Loader>
    );
};

export default MainPage;