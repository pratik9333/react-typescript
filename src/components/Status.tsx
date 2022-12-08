type statusProps = {
  status: "Loading" | "Success" | "Error";
};

export const Status = (props: statusProps) => {
  let message = null;

  if (props.status === "Loading") message = <h2>Loading</h2>;
  else if (props.status === "Success")
    message = <h2>Data fetched successfully!</h2>;
  else if (props.status === "Error") message = <h2>Error fetching Data</h2>;

  return <div>{message}</div>;
};
