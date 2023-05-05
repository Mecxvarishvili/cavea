import React from 'react';
import ItemsTable from '../components/table/ItemsTable';
import { Link, Route } from 'react-router-dom';
import path from '../serialize/pathnames';
import { Button } from 'react-bootstrap';

const MainPage = () => {
    return (
        <div className="container" >
            <Button>
                <Link to={path.ADD_PAGE} >დამატება</Link>
            </Button>
            <ItemsTable />
        </div>
    );
};

export default MainPage;