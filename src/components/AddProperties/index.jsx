import React, { useEffect, useState } from "react";
import {
  CheckBoxCard,
  CheckBoxSection,
  Container,
  IconDelete,
  ImageUrlSection,
  MenuWrapper,
  Section,
  SelectAnt,
  Text,
  Wrapper,
} from "./style";
import { Button, Input } from "../Generic";
import { useFormik } from "formik";
import { Checkbox } from "antd";
import TextArea from "antd/lib/input/TextArea";
import {  useNavigate, useParams } from "react-router-dom";

const AddProperties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [category, setCategory] = useState([]);
  const [valueDefault] = useState("Select Category");
  const [imgs, setImgs] = useState([]);
  const [photo, setPhoto] = useState("");
  const [initial, setInitial] = useState({
    houseDetails: {},
    componentsDto: {},
    homeAmenitiesDto: {},
    status: true,
    categoryId:1,
    locations: {
      latitude: 0,
      longitude: 0,
    },
  });
  const navigate = useNavigate();
  const { id } = useParams();
  
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => setCategory(res?.data || []));
  }, [url]);

  useEffect(() => {
    
      fetch(`${url}/houses/id/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setImgs(res?.data?.attachments);
          setInitial(res?.data || {});
        });
  }, [url,id]);

  const formik = useFormik({
    initialValues: initial,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      fetch(id?`${url}/houses/${id}`:`${url}/houses`, {
        method: id ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, attachments: imgs }),
      }).then((res) => res?.ok && navigate("/myproperties"));
    },
  });

  const onChangeUrl = ({ target: { value } }) => {
    setPhoto(value);
  };
  const onAdd = () => {
    if (imgs.length < 4 && photo) {
      setImgs([...imgs, { imgPath: photo, id: imgs.length * Math.random() }]);
      setPhoto("");
    }
  };

  const onDeleteUrl = (id) => {
    let res = imgs.filter((value) => value.id !== id);
    setImgs(res);
  };

  return (
    <Container>
      <Wrapper>
        <form onSubmit={formik.handleSubmit}>
          <MenuWrapper>
            <h1 className="subtitle">Address</h1>
            <Section>
              <Input
                onChangeProp={formik.handleChange}
                value={formik.values.country || ""}
                name="country"
                placeholder={"Country"}
              />
              <Input
                onChangeProp={formik.handleChange}
                value={formik.values.region || ""}
                name="region"
                placeholder={"Region"}
              />
              <Input
                onChangeProp={formik.handleChange}
                value={formik.values.city || ""}
                name="city"
                placeholder={"City"}
              />
              <Input
                onChangeProp={formik.handleChange}
                value={formik.values.address || ""}
                name="address"
                placeholder={"Address"}
                required
              />
              <Input
                onChangeProp={formik.handleChange}
                value={formik.values.zipCode || ""}
                name="zipCode"
                placeholder={"Zip Code"}
                required
              />
              <Input
                onChangeProp={formik.handleChange}
                value={formik.values.name || ""}
                name="name"
                placeholder={"Name"}
                required
              />
            </Section>
            <h1 className="subtitle">Apartment info </h1>
            <Section>
              {" "}
              <Input
                type="number"
                name="houseDetails.area"
                placeholder={"Area"}
                onChangeProp={formik.handleChange}
                value={formik.values.houseDetails.area}
                required
              />
              <Input
                type="number"
                name="houseDetails.bath"
                placeholder={"Bath"}
                onChangeProp={formik.handleChange}
                value={formik.values.houseDetails.bath}
                required
              />
              <Input
                type="number"
                name="houseDetails.beds"
                placeholder={"Beds"}
                onChangeProp={formik.handleChange}
                value={formik.values.houseDetails.beds}
                required
              />
              <Input
                type="number"
                name="houseDetails.garage"
                placeholder={"Garage"}
                onChangeProp={formik.handleChange}
                value={formik.values.houseDetails.garage}
                required
              />
              <Input
                type="number"
                name="houseDetails.room"
                placeholder={"Rooms"}
                onChangeProp={formik.handleChange}
                value={formik.values.houseDetails.room}
                required
              />
              <Input
                type="number"
                name="houseDetails.yearBuilt"
                placeholder={"yearBuilt"}
                onChangeProp={formik.handleChange}
                value={formik.values.houseDetails.yearBuilt}
                required
              />
              <SelectAnt
                labelInValue
                defaultValue={valueDefault || "Select"}
                onChange={formik.handleChange}
                name="categoryId"
              >
                <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>

                {category?.map((item) => {
                  return (
                    <SelectAnt.Option key={item.id} value={item.id}>
                      {item?.name}
                    </SelectAnt.Option>
                  );
                })}
              </SelectAnt>
            </Section>
            <h1 className="subtitle">Price </h1>
            <Section>
              <Input
                type="number"
                name="price"
                onChangeProp={formik.handleChange}
                placeholder={"Price"}
                value={formik.values.price || ""}
                required
              />
              <Input
                type="number"
                name="salePrice"
                onChangeProp={formik.handleChange}
                placeholder={"Sale Price"}
                value={formik.values.salePrice || ""}
              />
            </Section>
            <h1 className="subtitle">Add Images Url </h1>
            <Section>
              <Input
                value={photo || ""}
                onChangeProp={onChangeUrl}
                placeholder="Add images url"
              />
              <Button
                type={"button"}
                onClickProp={onAdd}
                disabled={imgs.length >= 4}
              >
                Add Img Url
              </Button>
            </Section>
            {imgs?.map((item, index) => {
              return (
                <ImageUrlSection key={item.id}>
                  <Text>
                    <b>{index + 1}.</b> {item.imgPath}{" "}
                  </Text>
                  <IconDelete onClick={() => onDeleteUrl(item.id)} />
                </ImageUrlSection>
              );
            })}
            <h1 className="subtitle">Description </h1>
            <Section>
              <TextArea
                onChange={formik.handleChange}
                placeholder="Description"
                rows={4}
                name="description"
                value={formik.values.description || ""}
              />
            </Section>
            <h1 className="subtitle">Additional </h1>
            <CheckBoxSection>
              <CheckBoxCard>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.airCondition"
                  value={formik.values.airCondition || false}
                >
                  Air conditioning
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.courtyard"
                  value={formik.values.courtyard || false}
                >
                  Courtyard
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.furniture"
                  value={formik.values.furniture || false}
                >
                  Furniture
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.gasStove"
                  value={formik.values.gasStove || false}
                >
                  Gas-Stove
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.internet"
                  value={formik.values.internet || false}
                >
                  Internet
                </Checkbox>
              </CheckBoxCard>
              <CheckBoxCard>
                <Checkbox
                  onChange={formik.handleChange}
                  name="componentsDto.tv"
                  value={formik.values.tv || false}
                >
                  {" "}
                  Tv
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.busStop"
                  value={formik.values.busStop || false}
                >
                  BusStop
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.garden"
                  value={formik.values.garden || false}
                >
                  Garden
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.market"
                  value={formik.values.market || false}
                >
                  Market
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.park"
                  value={formik.values.park || false}
                >
                  Park
                </Checkbox>
              </CheckBoxCard>
              <CheckBoxCard>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.parking"
                  value={formik.values.parking || false}
                >
                  {" "}
                  Parking
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.school"
                  value={formik.values.school || false}
                >
                  School
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.stadium"
                  value={formik.values.stadium || false}
                >
                  Stadium
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.subway"
                  value={formik.values.subway || false}
                >
                  Subway
                </Checkbox>
                <Checkbox
                  onChange={formik.handleChange}
                  name="homeAmenitiesDto.superMarket"
                  value={formik.values.superMarket || false}
                >
                  Super Market{" "}
                </Checkbox>
              </CheckBoxCard>
            </CheckBoxSection>
            <Button type="submit">{id ? "Update" : "Save"}</Button>
          </MenuWrapper>
        </form>
      </Wrapper>
    </Container>
  );
};

export default AddProperties;
