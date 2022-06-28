import React from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

import useStyles from './styles';

//Might have to check on useStyles - makeStyles
const Paginate = () => {
    const classes = useStyles ();

    return (
        <Pagination
            // classes is prop - where ul: line are objects
            classes = {{ ul: classes.ul }}
            // page count have to make it dynamic later
            count = {5}
            page ={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link}  to={`/posts?page=${1}`} />
            )}                    
        />
    );
};

export default Paginate;
