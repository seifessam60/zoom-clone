import React from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  return <div>This is meeting number: {params.id}</div>;
};

export default Meeting;
