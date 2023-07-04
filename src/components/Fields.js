import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const Fields = ({name, email, index}) => {
  return (
    <div className="dataList">
        <h4>{name}</h4>
        <h4>{email}</h4>
        <stack>
            <Button variant="contained" color="error">
                <DeleteIcon />
            </Button>
        </stack>
    </div>
  )
}

export default Fields