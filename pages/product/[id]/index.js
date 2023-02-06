import { useRouter } from "next/router";
import React from "react";

function ProductDetail() {
  const router = useRouter();
  const id = router.query.id;

  return <div>ProductDetail {id}</div>;
}

export default ProductDetail;
