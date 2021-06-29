import React from 'react'
import { Form, Button, FormGroup, Container, Grid, Image } from "semantic-ui-react";
import JobAdList from '../pages/JobAdList'
import { Route } from 'react-router';
import SearchFilter from './SearchFilter';
import SearchFilter2 from './SearchFilter2';
import JobAdverAdd from '../pages/JobAdverAdd';
import Segment from './Segment';

export default function Dashboard() {
    return (

        <div>
            <Route exact path="/jobadvertisement/add" component={JobAdverAdd} />
            <Route exact path="/" component={Segment} />

        </div>
    )
}
