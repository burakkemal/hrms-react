import React from 'react'
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import JobAdService from '../services/JobAdService';
import { Button, Card, CardGroup, Image } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";


export default function JobAdList() {
    const [jobAd, setJobAd] = useState([])
    useEffect(() => {
        let jobAdService = new JobAdService();
        jobAdService.getJobAd().then(result => setJobAd(result.data.data))
    }, [])
    return (
        <div >
            <CardGroup centered>
                {jobAd.map((jobAdvert) => (
                    <Card className="card1"
                        fluid
                        floated="right"
                        link
                        key={jobAdvert.id}>
                        <Card.Content>
                            <Image
                                floated="left"
                                size="mini"
                                src=""
                            />

                            <Card.Header textAlign="center">{jobAdvert.jobTitle.title}</Card.Header>
                            <Card.Meta textAlign="right">{jobAdvert.city.cityName}</Card.Meta>
                            <Card.Content textAlign="left">{jobAdvert.employer.companyName}</Card.Content>
                            <Card.Meta textAlign="left">Minimum Alım : {jobAdvert.openPositonNumber}</Card.Meta>
                            <Card.Meta textAlign="right"><i className='bell icon'></i> {jobAdvert.creationDate}</Card.Meta>
                            <Card.Meta textAlign="right">Son Başvuru Tarihi</Card.Meta>
                            <Card.Meta textAlign="right"><i className='bell slash icon'></i>  {jobAdvert.deadlineDate}</Card.Meta>

                        </Card.Content>
                        <Card.Content extra>
                            <div className="ui three buttons" >
                                <Button basic color="green">
                                    Başvur
                                </Button>
                                <Button basic color="red">
                                    Kaydet
                                </Button>

                                <Button basic color="blue">
                                    İlan Detayı
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>
                ))}
            </CardGroup>
        </div>

        //   <div>
        //         <Table celled inverted selectable className="table1">
        //             <Table.Header>
        //                 <Table.Row>
        //                     <Table.HeaderCell>Firma</Table.HeaderCell>
        //                     <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
        //                     <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
        //                     <Table.HeaderCell>Yayınlanma Tarihi</Table.HeaderCell>
        //                     <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
        //                 </Table.Row>
        //             </Table.Header>

        //             <Table.Body>
        //                 {jobAd.map((jobAd) => (
        //                     <Table.Row key={jobAd.id}>
        //                         <Table.Cell>{jobAd.employer.companyName}</Table.Cell>
        //                         <Table.Cell>{jobAd.jobTitle.title}</Table.Cell>
        //                         <Table.Cell>{jobAd.openPositonNumber}</Table.Cell>
        //                         <Table.Cell>{jobAd.creationDate}</Table.Cell>
        //                         <Table.Cell>{jobAd.deadlineDate}</Table.Cell>
        //                     </Table.Row>
        //                 ))}
        //             </Table.Body>
        //         </Table>
        //     </div>
    )
}
