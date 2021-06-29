import React from 'react'
import { Form, Button, FormGroup, Container, Grid, Image } from "semantic-ui-react";
import JobAdList from '../pages/JobAdList'
import { Route } from 'react-router';
import SearchFilter from './SearchFilter';
import SearchFilter2 from './SearchFilter2';
import JobAdverAdd from '../pages/JobAdverAdd';

export default function segment() {
    return (
        <div>
            <Grid className="mid" >
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Route exact path="/" component={SearchFilter} />
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Route exact path="/" component={SearchFilter2} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Container className="my-2em">
                <Grid>
                    <h4 className="lastadv">En son Eklenen ilanlar</h4>
                    <Button className="buttonall" color="green">Tüm İlanları Gör</Button>
                    <Grid.Row>

                        <Grid.Column width={10} floated="left">
                            <Route exact path="/" component={JobAdList} />
                        </Grid.Column>
                        <Grid.Column width={6} floated="right">
                            genel bişeyler

                        </Grid.Column>


                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}
