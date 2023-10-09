import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menu = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="coloum-menu">
      <Card className="shadow card-menu" onClick={() => masukKeranjang(menu)}>
        <Card.Img className="img-menu"
          variant="top"
          src={
            "assets/img/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title className="text-nama">{menu.nama}</Card.Title>
          <Card.Text className="text-harga">Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menu;