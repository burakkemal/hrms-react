import React from "react";
import Link from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Icon, Label } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div className="div1" >

            <div >
                <span className="h4 w-75 text-wrap">
                    <h4 className="p1"> <b>H</b>uman <b>R</b>esources <b>M</b>anagement <b>S</b>ystem</h4>

                </span>
                <Button color="green" className="advadd" as={NavLink} to="/jobadvertisement/add">Ücretsiz İlan Ekle</Button>
                <Button animated className="b1">
                    <Button.Content visible >Giriş Yap</Button.Content>
                    <Button.Content hidden>
                        <Icon name='user' />
                    </Button.Content>
                </Button>


            </div>

        </div>
    );
}
