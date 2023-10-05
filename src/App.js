import React, { Component } from 'react'
import NavbarComponent from "./components/NavbarComponent";
import Kategori from "./components/Kategori";
import Pesanan from "./components/Pesanan";
import Menu from "./components/Menu";
import { API_URL } from "./utils/constants";
import axios from "axios";
import { Container, Col, Row } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    axios.get(API_URL + 'products')
      .then(response => {
        const menus = response.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("pesanan Error", error);
      });
  }

  render() {
    const { menus } = this.state
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <Kategori
              // changeCategory={this.changeCategory}
              // categoriYangDipilih={categoriYangDipilih}
              />
              <Col className="mt-3">
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row className="overflow-auto menu">
                  {menus &&
                    menus.map((menu) => (
                      <Menu
                        key={menu.id}
                        menu={menu}
                      // masukKeranjang={this.masukKeranjang}
                      />
                    ))}
                </Row>
              </Col>
              <Pesanan
              // keranjangs={keranjangs} {...this.props}
              />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}