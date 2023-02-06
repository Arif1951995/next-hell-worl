import { useRouter } from "next/router";
import React from "react";

function Docs() {
  const router = useRouter();
  const { params } = router.query;

  console.log({ params });

  return <div>Docs Nested</div>;
}

export default Docs;
