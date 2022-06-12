import { Typography } from "@mui/material";

function Detail(props) {
  return (
    <div>
      <Typography variant="h6">{props.title}</Typography>
      <Typography variant="body2">{props.detail}</Typography>
    </div>
  );
}

export default Detail;
