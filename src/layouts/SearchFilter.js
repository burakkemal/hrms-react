import React from "react";
import { Form, Button, FormGroup, Search } from "semantic-ui-react";
import SearchExampleStandard from "./SearchExampleStandard";
export default function SearchFilter() {
    return (
        <div >
            <Form id="searchFilter" >
                <h4 className="h4-1">İlan Ara</h4>
                <FormGroup inline >
                    <Search className="searchFilter" style={{ backgroundColor: "white", borderRadius: "10px" }}
                        noResultsMessage="Şehir bulunamadı"
                        noResultsDescription="Aradığınız kritere uygun şehir bulunamadı"
                        minCharacters={3}
                        placeholder="Pozisyon adı, teknoloji adı"
                        size="big"
                    />
                </FormGroup>
            </Form>
        </div>
    );
}
