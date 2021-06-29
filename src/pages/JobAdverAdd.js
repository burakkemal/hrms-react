import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import JobAdService from "../services/JobAdService";
import { ToastContainer, toast } from 'react-toastify';
import {
    Label,
    Input,
    Button,
    TextArea,
    Form,
    Card,
    Dropdown,
    Container,
    FormField,
} from "semantic-ui-react";
import CityService from "../services/CityService";
import JobTitleService from "../services/JobTitleService";
import { useHistory } from "react-router-dom";

export default function JobAdverAdd() {



    useEffect(() => {
        let cityService = new CityService();
        cityService.getCity().then((result) => setCities(result.data.data));

        let jobTitleService = new JobTitleService();
        jobTitleService.getJobs().then((result) => setJobs(result.data.data));
    }, []);
    let jobAdvertisementService = new JobAdService();
    const [jobs, setJobs] = useState([]);
    const [cities, setCities] = useState([]);
    const schema = Yup.object({
        description: Yup.string().required("İş tanımı boş bırakılamaz"),
        minSalary: Yup.number()
            .typeError("Bu alana metinsel ifade girilemez")
            .min(1, "Minumum maaş miktarı 1'den küçük olamaz."),
        maxSalary: Yup.number()
            .typeError("Bu alana metinsel ifade girilemez")
            .min(1, "Maximum maaş miktarı 1'den küçük olamaz"),
        openPositonNumber: Yup.number()
            .typeError("Bu alana metinsel ifade girilemez")
            .min(1, "Açık pozisyon adedi 1'den küçük olamaz"),
        city: Yup.object().required("Bu alan boş bırakılamaz"),
        title: Yup.object().required("Bu alan boş bırakılamaz"),
        deadLineDate: Yup.date()
            .typeError("Lütfen geçerli bir tarih formatı girin")
            .required("Bu alan boş bırakılamaz"),
    });
    const formik = useFormik({
        initialValues: {
            createdDate: "",
            deadLineDate: "",
            description: "",
            maxSalary: "",
            minSalary: "",
            openPositionNumber: "",
            city: "",
            employer: "43",
            jobTitle: ""
        },
        validationSchema: schema,
    });
    let formdata = {
        description: formik.values.description,
        minSalary: formik.values.minSalary,
        maxSalary: formik.values.maxSalary,
        openPositionNumber: formik.values.openPositionNumber,
        deadlineDate: formik.values.deadLineDate,
        jobTitle: formik.values.jobTitle.id,
        city: formik.values.city.id,
        employer: "43",

    }
    const history = useHistory();
    const handleSubmit = (values) => {
        console.log(formdata)
        jobAdvertisementService
            .add(formdata)
            .then((result) => {
                console.log(result.data)
                toast.success(result.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                const timer = setTimeout(() => {
                    history.push("/");
                }, 5000);
                return () => clearTimeout(timer);


            });
    }
    return (
        <div className="container">
            <Container>
                <Card fluid className="cardstyle">
                    <Card.Content header="İş İlanı Ekle" />
                    <Card.Content>
                        <Form onSubmit={() => handleSubmit()}>
                            <h4 htmlFor="description">Açıklama</h4>
                            <Form.Field
                                placeholder="İlan açıklaması"
                                control={TextArea}
                                style={{ minHeight: 250 }}
                                onChange={formik.handleChange}
                                id="description"
                                name="description"
                                value={formik.values.description}
                            />
                            <label pointing basic color="red">{formik.errors.description}</label>
                            <FormField>
                                <h4>Pozisyon</h4>
                                <select
                                    placeholder="İş Pozisyonu Seçiniz.."
                                    id="jobTitle.id"
                                    name="jobTitle.id"
                                    value={formik.values.id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option>
                                        Seçiniz
                                    </option>
                                    {jobs.map((job, index) => (
                                        <option key={index} value={job.id}>
                                            {job.title}
                                        </option>
                                    ))}
                                    ;
                                </select>
                            </FormField>
                            <FormField>
                                <Label htmlFor="city.id">Lokasyon</Label>
                                <select
                                    name="city.id"
                                    id="city.id"
                                    value={formik.values.city.id}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option hidden>Şehir seçiniz</option>
                                    {cities.map((city, index) => (
                                        <option key={index} value={city.id} label={city.cityName}>
                                            {city.cityName}
                                        </option>
                                    ))}
                                </select>
                                <div>{formik.errors.city}</div>
                            </FormField>
                            <h4 htmlFor="positionNumber">Açık Pozisyon Sayısı</h4>
                            <Form.Field
                                type="number"
                                id="positionNumber"
                                control={Input}
                                name="openPositionNumber"
                                onChange={formik.handleChange}
                                value={formik.values.openPositionNumber}
                                placeholder="Açık pozisyon sayısı"
                                onBlur={formik.handleBlur}
                            />
                            <div>{formik.errors.openPositionNumber}</div>
                            <h4 htmlFor="minSalary">Minimum Maaş</h4>
                            <Form.Field
                                type="text"
                                control={Input}
                                id="minSalary"
                                name="minSalary"
                                placeholder="Minimum maaş miktarı"
                                onChange={formik.handleChange}
                                value={formik.values.minSalary}
                                onBlur={formik.handleBlur}
                            />
                            <div>{formik.errors.minSalary}</div>
                            <h4 htmlFor="maxSalary">Maximum Maaş</h4>
                            <Form.Field
                                type="text"
                                control={Input}
                                id="maxSalary"
                                name="maxSalary"
                                placeholder="Maximum maaş miktarı"
                                onChange={formik.handleChange}
                                value={formik.values.maxSalary}
                                onBlur={formik.handleBlur}
                            />
                            <div>{formik.errors.maxSalary}</div>
                            <h4 htmlFor="deadLineDate">Son Başvuru Tarihi</h4>
                            <Form.Field
                                type="date"
                                control={Input}
                                id="deadLineDate"
                                name="deadLineDate"
                                onChange={formik.handleChange}
                                value={formik.values.deadLineDate}
                                onBlur={formik.handleBlur}
                            />
                            <div basic color="red" pointing>
                                {formik.errors.deadLineDate}
                            </div>
                            <h4 htmlFor="createdDate">Oluşturulma Tarihi</h4>
                            <Form.Field
                                type="date"
                                id="createdDate"
                                control={Input}
                                name="createdDate"
                                onChange={formik.handleChange}
                                value={formik.values.createdDate}
                                onBlur={formik.handleBlur}
                            />
                            <div>{formik.errors.createdDate}</div>
                            <Button type="submit" color="green">Gönder</Button>
                        </Form>
                    </Card.Content>
                </Card>
            </Container>
            <ToastContainer />
        </div>
    );
}
