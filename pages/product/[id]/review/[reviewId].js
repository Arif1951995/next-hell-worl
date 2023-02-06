import { useRouter } from "next/router";
import React from "react";

function ProductReview() {
  const router = useRouter();
  const productId = router.query.id;
  const reviewId = router.query.reviewId;
  return (
    <div>
      ProductReview of product = {productId} and review = {reviewId}
    </div>
  );
}

export default ProductReview;
