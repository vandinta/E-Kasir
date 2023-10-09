import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
import { API_URL } from '../utils/constants'

export default class Bayar extends Component {
  submitBayar = (totalBayar) => {
      const pesanan = {
          total_bayar: totalBayar,
          menus: this.props.keranjangs
      }

      axios.post(API_URL+"pesanans", pesanan).then((res) => {
        axios
        .get(API_URL + "keranjangs")
        .then((res) => {
          const keranjangs = res.data;
          keranjangs.map(function (item) {
            return axios
              .delete(API_URL + "keranjangs/" + item.id)
              .then((res) => console.log(res))
              .catch((error) => console.log(error))
          })
        })
      })
  };

  render() {
    const totalBayar = this.props.keranjangs.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);

    return (
      <>
      <div className="fixed-bottom d-none d-md-block">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5  className="pesanan-menu">
              Harga Total :{" "}
              <strong className="float-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h5>
            <Button
              variant="primary"
              block
              className="tombol-bayar"
              size="lg"
              onClick={() => this.submitBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>

      <div className="d-sm-block d-md-none">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h5  className="pesanan-menu">
              Harga Total :{" "}
              <strong className="float-right mr-2">
                Rp. {numberWithCommas(totalBayar)}
              </strong>
            </h5>
            <Button
              variant="primary"
              block
              className="mb-2 mt-4 mr-2"
              size="lg"
              onClick={() => this.submitBayar(totalBayar)}
            >
              <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
            </Button>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}