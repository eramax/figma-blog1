import { TextField, Button } from "@mui/material";

const Comments = () => {
  return (
    <div className="self-stretch rounded-[8px] bg-white shadow-[0px_4px_6px_-1px_rgba(0,_0,_0,_0.1),_0px_2px_4px_-1px_rgba(0,_0,_0,_0.06)] [border:1px_solid_#cbd5e1] box-border relative flex flex-col p-[10px_30px] items-start justify-start gap-[15px] text-left text-lg text-gray-1000 font-inter">
      <div className="h-[40px] shrink-0 flex flex-col items-start justify-start">
        <div className="self-stretch h-[40px] shrink-0 flex flex-row items-center justify-between">
          <div className="relative leading-[20px] font-semibold inline-block">
            Comments
          </div>
        </div>
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch"
        color="primary"
        variant="standard"
        type="text"
        label="Your Name"
        size="small"
        margin="none"
      />
      <TextField
        className="self-stretch"
        color="primary"
        variant="standard"
        multiline
        rows={3}
        label="Your comment"
        margin="none"
      />
      <div className="self-stretch h-[38px] shrink-0 flex flex-row items-center justify-end">
        <Button variant="contained" color="primary" size="small">
          Submit commet
        </Button>
      </div>
    </div>
  );
};

export default Comments;
