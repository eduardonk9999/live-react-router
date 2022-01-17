import React from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/products";

export function Product () {
  const params = useParams<{id: string}>();

  const product = PRODUCTS.find((p) => p.identifier === params.id)

  return(
    <>
      <h2>Olá, seja bem vindo</h2>
      <p>Deseja comprar o produto <strong>{product?.name}</strong></p>

      <button>Comprar</button>
    </>
  )
}